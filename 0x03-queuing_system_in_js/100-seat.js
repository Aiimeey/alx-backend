import { createClient } from "redis";
import express from 'express'
import {createQueue} from 'kue'
const app = express();
app.use(express.json())
const queue = createQueue();
const client = createClient();
client.connect()
let reservationEnabled = true;
client.on("error",()=>{
    console.log("redis client error ")
})

function reserveSeat(number){
    return client.set("available_seats", number)
}
async function getCurrentAvailableSeats(){
    let x = await client.get("available_seats")
    return  parseInt(x) < 0 ? 0 : parseInt(x, 10);
}

app.get('/available_seats', async(req, res)=>{
    const seats = await getCurrentAvailableSeats()
    res.json({ numberOfAvailableSeats: seats })
})
app.listen(1245,async()=>{
console.log("____server running______")
    await reserveSeat(50)
}) 

app.get('/reserve_seat',(req,res)=>{
    if(reservationEnabled == false){
        return res.json({ "status": "Reservation are blocked" })
    }
    const job = queue.create("reserve_seat");
    job.save((err)=>{
        if (err) {
            return res.json({ status: 'Reservation failed' });
        }
        res.json({ status: 'Reservation in process' });
    });

    job.on("complete",()=>{
        console.log(`Seat reservation job ${job.id} completed`)
    })
    job.on("failed",(err)=>{
        console.log(`Seat reservation job ${job.id} failed:`,err)
    })
});

app.get('/process', async (req, res) => {
    res.json({ "status": "Queue processing" });

    // Process the queue
    queue.process('reserve_seat', async (job, done) => {
        try {
            let seats = await getCurrentAvailableSeats();
            
            if (seats <= 0 || isNaN(seats)) {
                reservationEnabled = false;
                done(new Error('Not enough seats available'));
                return;
            }

            await reserveSeat(seats - 1);
            console.log(seats)
            if (seats === 1) {
                reservationEnabled = false;
            }

            done(); // Mark job as completed
        } catch (error) {
            done(error); // Pass error to done
        }
    });
});

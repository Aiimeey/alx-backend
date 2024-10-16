#!/usr/bin/node
import { createClient } from 'redis';
import express from 'express'
// const { promisify } = require('util');

const app = express()
app.use(express.json())
const client = createClient();
// const getAsync = promisify(client.get).bind(client);
// const incrreserveStock = promisify(client.incr).bind(client);

client.on('error',()=>{
  console.log(' redis client error')
 })
 client.connect();

const listProducts = [
  { id: 1, name: 'Suitcase 250', price: 50, stock: 4 },
  { id: 2, name: 'Suitcase 450', price: 100, stock: 10 },
  { id: 3, name: 'Suitcase 650', price: 350, stock: 2 },
  { id: 4, name: 'Suitcase 1050', price: 550, stock: 5 },
];


function getItemById(id, listProducts){
  return listProducts.find(x => x.id === id)

}

app.get('/list_products',(req,res)=>{
    const products = listProducts.map(({id, name, price, stock})=>({
    itemId : id,
    itemName :name,
    price : price,
    initialAvailableQuantity: stock,
    })
  )
  return res.json(products)
})

function reserveStockById(itemId, stock){
  const reply =  client.set(`item.${itemId}`, stock) 
  return reply
}

async function getCurrentReservedStockById(itemId){
  const stock = await client.get(`item.${itemId}`)
  return stock ? parseInt(stock): 0;
}

app.get('/list_products/:itemId',async (req,res)=>{
  const Id = parseInt(req.params.itemId, 10)
  const stok = await getCurrentReservedStockById(Id);
  const product = getItemById(Id,listProducts)
  if(!product){
    return res.status(404).json({"status":"Product not found"})
  }
  const stock_available = product.stock - stok;
  const { stock, ...rest } = product;
  res.json({
    ...rest,
    initialAvailableQuantity: product.stock,
    currentQuantity : stock_available}) 
})

app.get('/reserve_product/:itemId',async (req, res) => {
  const Id = parseInt(req.params.itemId, 10)
  const product = getItemById(Id,listProducts)
  const stok = await getCurrentReservedStockById(Id)
  console.log("stok" ,stok)
  if(!stok){
    return res.status(404).json({ status : "Product not found"})
  }

  const stock_available = product.stock - stok;
  if(stock_available <= 0){
    return res.status(400).json({"status":"Not enough stock available","itemId":1})
  }
  else {
      // await incrreserveStock(itemId); // Reserve stock by incrementing it
    const reply = await reserveStockById(Id, stok + 1)
    console.log(reply)
    return res.status(200).json({"status":"Reservation confirmed","itemId":1})
  }
})

app.listen(1245,()=>{
  console.log('---- server running -----')
})

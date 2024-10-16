#!/usr/bin/node
// 4-redis_advanced_op.js
import { createClient } from 'redis';
import pkg from 'redis';
const {print} = pkg;


const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});
const hashKey = 'HolbertonSchools';
const values = {
Portland : 50,
Seattle : 80,
'New York' : 20,
Bogota: 20,
Cali: 40,
Paris: 2,
};
(async () => {
  try {
    await client.connect();
    for (const [key, value] of Object.entries(values)){
    const reply = await client.hSet(hashKey, key, value);
    console.log(reply)
}

    const obj = await client.hGetAll(hashKey);
    const standardObj = { ...obj }; // Convert to standard object
    console.log(standardObj);

    
  } catch (error) {
    console.error('Error during Redis operations:', error.message);
  } finally {
    await client.quit();
  }
})();

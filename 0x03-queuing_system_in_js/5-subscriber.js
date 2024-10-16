#!/usr/bin/node
// 5-subscriber.js
import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

async function main() {
  await client.connect();
  
  client.subscribe('holberton school channel', (err, count) => {
    if (err) {
      console.error('Failed to subscribe:', err);
    } else {
      console.log(`Subscribed to holberton school channel. Current subscriptions: ${count}`);
    }
  });

  client.on('message', (channel, message) => {
    console.log(`Received message: ${message}`);
    if (message === 'KILL_SERVER') {
      client.unsubscribe('holberton school channel');
      client.quit();
    }
  });
}

main().catch(err => console.error('Error in main:', err));

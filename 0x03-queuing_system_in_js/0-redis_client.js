import { createClient } from 'redis';

const client = createClient();

client.on('error', (error) => {
  console.error('Redis client not connected to the server: ', error.message);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

async function connectClient() {
  await client.connect();
}

connectClient().catch(console.error).finally(client.quit());

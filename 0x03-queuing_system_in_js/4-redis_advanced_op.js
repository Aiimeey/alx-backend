import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server: ', err);
});

client.on('connect', (err) => {
  console.log('Redis client connected to the server');
  main();
});

const values = {
  Portland: 50,
  Seattle: 80,
  'New York': 20,
  Bogota: 20,
  Cali: 40,
  Paris: 2,
};

function main() {
  for (const [field, value] of Object.entries(values)) {
    client.HSET('HolbertonSchools', field, value, print);
  }

  client.HGETALL('HolbertonSchools', (_err, replay) => {
    console.log(replay);
  });
}

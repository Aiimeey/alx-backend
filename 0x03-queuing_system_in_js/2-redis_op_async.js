import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('error', (error) => {
  console.error('Redis client not connected to the server: ', error.message);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

const setNewSchool = async (schoolName, value) => {
  try {
    const reply = await client.set(schoolName, value);
    console.log('Reply:', reply);
  } catch (error) {
    console.error('Error setting value:', error);
  }
};

const displaySchoolValue = async (schoolName) => {
  try {
    const getAsync = promisify(client.get).bind(client);
    const value = await getAsync(schoolName);
    if (value === null) {
      console.log(`No value found for ${schoolName}`);
    } else {
      console.log(value);
    }
  } catch (error) {
    console.error('Error getting value:', error);
  }
};

(async () => {
  try {
    await client.connect();

    await displaySchoolValue('Holberton'); 
    setNewSchool('HolbertonSanFrancisco', '100'); 
    await displaySchoolValue('HolbertonSanFrancisco'); 
    
  } catch (error) {
    console.error('Error during Redis operations:', error.message);
  } finally {
    await client.quit(); 
  }
})();

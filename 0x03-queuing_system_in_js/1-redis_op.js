import pkg from 'redis';
const { createClient } = pkg;

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
    const value = await client.get(schoolName);
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
    client.connect();

    displaySchoolValue('Holberton'); 
    setNewSchool('HolbertonSanFrancisco', '100'); 
    displaySchoolValue('HolbertonSanFrancisco'); 
    
  } catch (error) {
    console.error('Error during Redis operations:', error.message);
  } finally {
    await client.quit(); 
  }
})();

import {createQueue} from 'kue';

const queue = createQueue();
 
// Create job data
const jobData = {
  phoneNumber: '1234567890',
  message: 'Hello, this is a test notification!'
};

// Create a job in the queue
const job = queue.create('push_notification_code', jobData).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  } else {
    console.error('Error creating job:', err);
  }
});

// Listen for job completion
job.on('complete', () => {
  console.log('Notification job completed');
});

// Listen for job failure
job.on('failed', (err) => {
  console.log('Notification job failed:', err);
});

// // Process the job
// queue.process('push_notification_code', (job, done) => {
//   // Simulate job processing (e.g., send a notification)
//   // console.log(`Sending notification to ${job.data.phoneNumber}: ${job.data.message}`);

//   done(); // or done(new Error('Something went wrong'));
// });

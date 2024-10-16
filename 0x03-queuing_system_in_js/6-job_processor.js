import { createQueue } from 'kue';

const queue = createQueue();

// Function to send notification
const sendNotification = (phoneNumber, message) => {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
};

// Process the job
queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message);
  done(); // Mark the job as complete
});

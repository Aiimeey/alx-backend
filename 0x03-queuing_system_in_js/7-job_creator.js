import { createQueue } from 'kue';

const jobs = [
  {
    phoneNumber: '1',
    message: 'This is the code 11 to verify your account',
  },
  {
    phoneNumber: '2',
    message: 'This is the code 22 to verify your account',
  },
  {
    phoneNumber: '3',
    message: 'This is the code 33 to verify your account',
  },
  {
    phoneNumber: '4',
    message: 'This is the code 44 to verify your account',
  },
  {
    phoneNumber: '5',
    message: 'This is the code 55 to verify your account',
  },
  {
    phoneNumber: '6',
    message: 'This is the code 66 to verify your account',
  },
  {
    phoneNumber: '7',
    message: 'This is the code 77 to verify your account',
  },
  {
    phoneNumber: '8',
    message: 'This is the code 88 to verify your account',
  },
  {
    phoneNumber: '9',
    message: 'This is the code 99 to verify your account',
  },
  {
    phoneNumber: '10',
    message: 'This is the code 100 to verify your account',
  },

];

const queue = createQueue({ name: 'push_notification_code_2' });

jobs.forEach((Job) => {
  const job = queue.create('push_notification_code_2', Job);

  job
    .on('enqueue', () => {
      console.log('Notification job created:', job.id);
    })
    .on('complete', () => {
      console.log('Notification job', job.id, 'completed');
    })
    .on('failed', (err) => {
      console.log('Notification job', job.id, 'failed:',
        err.message || err.toString()
      );
    })
    .on('progress', (progress, _data) => {
      console.log('Notification job', job.id, `${progress}% complete`);
    });

  job.save();
});

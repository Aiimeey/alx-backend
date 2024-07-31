import { createQueue } from 'kue';

const queue = createQueue({ name: 'push_notification_code' });

const job = queue.create('push_notification_code', {
  phoneNumber: '+2121213151618',
  message: 'Job created',
});

job.on('failed attempt', () => console.log('Notification job failed'));
job.on('enqueue', () => console.log('Notification job created:', job.id));
job.on('complete', () => console.log('Notification job completed'));

job.save();

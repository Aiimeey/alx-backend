import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();
queue.testMode = true; // Enable test mode

describe('createPushNotificationsJobs', () => {
  beforeEach(() => {
    // Clear the queue before each test
    queue.testMode.clear();
  });

  it('should throw an error if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs({}, queue)).to.throw(Error, 'Jobs is not an array');
  });

  it('should create jobs in the queue', () => {
    const jobs = [
      { phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' },
      { phoneNumber: '4153518781', message: 'This is the code 5678 to verify your account' },
    ];

    createPushNotificationsJobs(jobs, queue);

    const queuedJobs = queue.testMode.jobs; // Get jobs from test mode
    expect(queuedJobs).to.have.lengthOf(2); // Check that 2 jobs were created

    queuedJobs.forEach((job, index) => {
      expect(job.data).to.deep.equal(jobs[index]); // Verify job data
    });
  });

  after(() => {
    // Clear the queue after all tests
    queue.testMode.clear();
    queue.testMode = false; // Disable test mode
  });
});

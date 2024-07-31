# Queueing System for JS

## Introduction

This project demonstrates how to integrate Redis and Kue into a Node.js application to manage background tasks and job processing. Redis is utilized for its fast in-memory data storage capabilities and messaging patterns, while Kue provides a priority job queue system that leverages Redis to handle asynchronous jobs and tasks efficiently.

## Overview

1. **Install Redis**: 
   - Download, extract, and compile Redis.
   - Start the Redis server and test it.
   - Copy the `dump.rdb` file to your project directory.

2. **Node Redis Client**: 
   - Create a script to connect to Redis.
   - Handle connection success and failure.

3. **Node Redis Client and Basic Operations**: 
   - Extend the script to include basic Redis operations.
   - Set and get values using callbacks.

4. **Node Redis Client and Async Operations**: 
   - Refactor the script to use async/await for handling Redis operations.
   - Utilize promisify for Redis operations.

5. **Node Redis Client Publisher and Subscriber**: 
   - Implement publisher and subscriber scripts to manage messages in Redis channels.

6. **Create the Job Creator**: 
   - Use Kue to create and manage jobs.
   - Handle job status and enqueue tasks.

7. **Create the Job Processor**: 
   - Implement job processing and logging with Kue.

8. **Track Progress and Errors with Kue: Job Creator**: 
   - Enqueue a batch of jobs.
   - Monitor job progress and track their statuses.

9. **Track Progress and Errors with Kue: Job Processor**: 
   - Manage job processing with error handling.
   - Implement progress tracking and handle errors, such as blacklisting phone numbers.

10. **Writing the Job Creation Function**: 
    - Create a function to handle job creation and status tracking.
    - Test the function using a dedicated script.

## Resources & Tips

- **Redis Documentation**: [Redis Quick Start](https://redis.io/docs/getting-started/), [Redis Commands](https://redis.io/commands/)
- **Kue Documentation**: [Kue on GitHub](https://github.com/Automattic/kue)
- **Node.js Promisify**: [Node.js Docs on Util.promisify](https://nodejs.org/api/util.html#utilpromisify)

## Troubleshooting Tips

- **Redis Connection Issues**: Ensure Redis server is running and listening on the correct port.
- **Kue Issues**: Refer to Kue’s documentation for setup and configuration guidance.
- **Error Handling**: Implement robust error handling and logging to facilitate debugging.

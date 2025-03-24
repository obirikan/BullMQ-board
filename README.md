# Bull Queue Dashboard

This project sets up a **Bull Queue Dashboard** using **BullMQ** and **Bull-Board** to monitor and manage queues in an **Express.js** application.

## Features
- Uses **Bull** for managing job queues
- Provides a **Bull-Board UI** for monitoring queues
- Connects to a **Redis instance** for job processing
- Supports environment-based configurations
- Runs on **Express.js**

## Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Redis](https://redis.io/) (Ensure it's running locally or on a server)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bull-queue-dashboard.git
   cd bull-queue-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and configure your Redis instance:
   ```ini
   PORT=3000
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=
   REDIS_DB=0
   ```

## Running the Application
To start the server, run:
```sh
node index.js
```

The Bull-Board UI will be available at:
```
http://localhost:3000/admin/queues
```

## Usage
- Navigate to `http://localhost:3000/admin/queues` to monitor the queues.
- Add jobs to the **dispatch** queue to see real-time updates.
- Manage job retries, failures, and processing status from the UI.

## Deployment
- Ensure your **Redis instance** is accessible in a production environment.
- Use **PM2** or **Docker** for process management.
- Modify `PORT` and `REDIS_*` variables as needed in your production `.env` file.

## License
This project is licensed under the MIT License.


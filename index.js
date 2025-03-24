const express = require("express");
const dotenv = require("dotenv");
const Queue = require("bull");
const { createBullBoard } = require("@bull-board/api");
const { BullAdapter } = require("@bull-board/api/bullAdapter");
const { ExpressAdapter } = require("@bull-board/express");

(async () => {
  dotenv.config();


  // Redis connection 
  const redisOptions = {
    redis: {
    host: process.env.REDIS_HOST || 'localhost', // Redis host 
    port: process.env.REDIS_PORT || 6379,       // Redis port
    password: process.env.REDIS_PASSWORD || '', // Redis password
    db: process.env.REDIS_DB || 0,          
    },
  };
  const queuesList = [process.env.QUEUE];

  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath("/admin/queues");

  const queues = queuesList
    .map((qs) => new Queue(qs, redisOptions))
    .map((q) => new BullAdapter(q));
  const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues,
    serverAdapter: serverAdapter,

  });

  const app = express();

  app.use("/admin/queues", serverAdapter.getRouter());


  const { PORT } = process.env;
  app.listen(PORT, () => {
    console.info(`Running on ${PORT}...`);
    console.info(` http://localhost:${PORT}/admin/queues`);
  });
})();

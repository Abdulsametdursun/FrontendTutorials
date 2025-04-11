import "dotenv/config";
import "./types/env";

import express from "express";

import mongoose from "mongoose";

import registerRoutes from "./routes";

const app = express();

app.use(express.json());
registerRoutes(app);

const startApp = async () => {
  console.log("Before connection");
  await mongoose.connect(process.env.MONGODB_CONNECTION).then(() => {
    console.log("Connected to mongodb");
  });
  console.log("After connection");

  app.listen(
    parseInt(process.env.EXPRESS_PORT),
    process.env.EXPRESS_HOST,
    () => {
      console.log(
        "Server started at " +
          process.env.EXPRESS_HOST +
          ":" +
          process.env.EXPRESS_PORT
      );
    }
  );
};

startApp();

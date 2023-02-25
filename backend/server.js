import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Data from "./data.js";
import Videos from "./models/dbModel.js";

dotenv.config();

// ****************** //
// *** APP CONFIG *** //
// ****************** //

const app = express();
const port = process.env.PORT || 5001;

// ****************** //
// *** DB CONFIG *** //
// ****************** //

connectDB();

// ****************** //
// *** MIDDLEWARE *** //
// ****************** //

app.use(express.json());
app.use(Cors());

// ********************* //
// *** API ENDPOINTS *** //
// ********************* //

// GET Requests
app.get("/", (req, res) => res.status(200).send("Hello There!")); // Test

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// POST request
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data); //  "videos" will be added to db collection
    }
  });
});

// POST Request
// GET request

// **************** //
// *** LISTENER *** //
// **************** //

app.listen(port, () => console.log(`Listening on PORT ${port}`));

const Joi = require("joi");
const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const users = require("./routes/users");
const marketData = require("./routes/marketData");
const indicesData = require("./routes/indicesData");
const cors = require("cors");
const app = express();


mongoose
  .connect("mongodb+srv://alphaRinne1:quantumLeap321@cluster0.lw0scxu.mongodb.net/")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

const corsOptions = {
  origin: "*", // Allow any URL
  credentials: true, // Allow cookies
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/auth", auth);
app.use("/api/marketData", marketData);
app.use("/api/indicesData", indicesData);
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}...`));

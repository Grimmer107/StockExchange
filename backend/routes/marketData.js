const { MarketData, validate } = require("../models/marketData");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await MarketData.find().sort({ _id: -1 }).limit(1);
  res.send(data[0]);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let marketData = new MarketData(req.body);

  marketData = await marketData.save();

  res.send(marketData);
});

module.exports = router;

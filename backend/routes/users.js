const auth = require("../middleware/auth");
const { User, validate } = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password -preferences");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "email"]));
});

router.put('/preferences/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).send(error.details[0].message);

  user.preferences = req.body.preferences;

  await user.save();

  res.send(true);
});

router.get('/preferences/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).send(error.details[0].message);

  res.send(user.preferences);
});

module.exports = router;

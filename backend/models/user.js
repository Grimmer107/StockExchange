const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    maxlength: 255,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
    required: true,
  },
  preferences:{
    type: [ String ],
    required: false
  } 
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, name: this.name, email: this.email }, "key1234");
  return token;
};

const User = mongoose.model("User", userSchema);

// Validation with Joi
function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(5).max(255).required(),
    preferences: Joi.array().items(Joi.string())
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;

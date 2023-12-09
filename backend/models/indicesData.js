const Joi = require("joi");
const mongoose = require("mongoose");

const indexData = {
  type: {
    Value: {
      type: String,
      required: true,
    },
    High: {
      type: String,
      required: true,
    },
    Low: {
      type: String,
      required: true,
    },
    Volume: {
      type: String,
      required: true,
    },
    OneYear: {
      type: String,
      required: true,
    },
    YTD: {
      type: String,
      required: true,
    },
    PrevClose: {
      type: String,
      required: true,
    },
    DayRange: {
      type: String,
      required: true,
    },
    FiftyTwoWeekRange: {
      type: String,
      required: true,
    },
  },
  required: true,
};

const IndicesData = mongoose.model(
  "IndicesData",
  new mongoose.Schema({
    KSE100: indexData,
    ALLSHR: indexData,
    KSE30: indexData,
    KMI30: indexData,
  })
);

function validateIndicesData(indicesData) {
  const innerSchema = Joi.object({
    Value: Joi.string().required(),
    High: Joi.string().required(),
    Low: Joi.string().required(),
    Volume: Joi.string().required(),
    OneYear: Joi.string().required(),
    YTD: Joi.string().required(),
    PrevClose: Joi.string().required(),
    DayRange: Joi.string().required(),
    FiftyTwoWeekRange: Joi.string().required(),
  });

  const schema = Joi.object({
    KSE100: innerSchema,
    ALLSHR: innerSchema,
    KSE30: innerSchema,
    KMI30: innerSchema,
  });

  return schema.validate(indicesData);
}

module.exports.IndicesData = IndicesData;
module.exports.validate = validateIndicesData;

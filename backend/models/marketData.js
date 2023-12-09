const Joi = require("joi");
const mongoose = require("mongoose");

const MarketData = mongoose.model(
  "MarketData",
  new mongoose.Schema({
    marketData: [
      {
        name: {
          type: String,
          required: true,
        },
        scrip: {
          type: String,
          required: true,
        },
        ldcp: {
          type: String,
          required: true,
        },
        open: {
          type: String,
          required: true,
        },
        high: {
          type: String,
          required: true,
        },
        low: {
          type: String,
          required: true,
        },
        current: {
          type: String,
          required: true,
        },
        change: {
          type: String,
          required: true,
        },
        volume: {
          type: String,
          required: true,
        },
      },
    ],
  })
);

function validateMarketData(marketData) {
  const schema = Joi.object({
    marketData: Joi.array().items(
      Joi.object().keys({
        name: Joi.string().required(),
        scrip: Joi.string().required(),
        ldcp: Joi.string().required(),
        open: Joi.string().required(),
        high: Joi.string().required(),
        low: Joi.string().required(),
        current: Joi.string().required(),
        change: Joi.string().required(),
        volume: Joi.string().required(),
      })
    ),
  });

  return schema.validate(marketData);
}

module.exports.MarketData = MarketData;
module.exports.validate = validateMarketData;

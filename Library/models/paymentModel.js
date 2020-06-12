const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },

  amount: {
    type: Number,
    required: true,
    default: 0.0
  },

  tranxtime: {
    type: Date,
    date: Date.now
  }
});

const payment = mongoose.model("payment", paymentSchema);

module.exports.paymentSchema = paymentSchema;

module.exports.payment = payment;

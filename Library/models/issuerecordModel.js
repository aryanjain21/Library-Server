const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },

  issueDate: {
    type: Date,
    default: Date.now,
    required: true
  },

  returnDueDate: {
    type: Date,
    required: true
  },

  returnDate: {
    type: Date
  },

  fineAmount: {
    type: Number,
    default: 0.0
  }
});

const Issued = mongoose.model("issued", recordSchema);

module.exports.recordSchema = recordSchema;

module.exports.Issued = Issued;

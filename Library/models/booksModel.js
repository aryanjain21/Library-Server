const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },

  author: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },

  subject: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },

  price: {
    type: Number,
    required: true
  },

  isbn: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },

  rack: {
    type: Number,
    required: true,
    maxlength: 3
  },

  status: {
    type: Boolean,
    required: true
  }
});

const Books = mongoose.model("books", bookSchema);

module.exports.bookSchema = bookSchema;

module.exports.Books = Books;

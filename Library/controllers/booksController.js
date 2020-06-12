const express = require("express");
const router = express.Router();

const { Books } = require("../models/booksModel");

router.get("/", function(req, res) {
  res.send(JSON.stringify("Hello from books Controller"));
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Books.findOne({ _id: req.params.id }); //.select(
    //   "name username phone email forums"
    // );
    res.status(200).send(book);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let book = new Books({
      bookname: req.body.bookname,
      author: req.body.author,
      subject: req.body.subject,
      price: req.body.price,
      isbn: req.body.isbn
    });
    book = await book.save();
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

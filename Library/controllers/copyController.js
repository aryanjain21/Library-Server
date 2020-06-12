const express = require("express");
const router = express.Router();

const { Copies } = require("../models/booksModel");

router.get("/", function(req, res) {
  res.send(JSON.stringify("Hello from copy Controller"));
});

router.get("/:id", async (req, res) => {
  try {
    const copy = await Copies.findOne({ _id: req.params.id }); //.select(
    //   "name username phone email forums"
    // );
    res.status(200).send(copy);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let copy = new Copies({
      books: req.body.books,
      rack: req.body.rack,
      status: req.body.status
    });
    copy = await copy.save();
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

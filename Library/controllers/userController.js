const express = require("express");
const router = express.Router();

const { User } = require("../models/userModel");
const { Book } = require("../models/booksModel");

router.get("/", function(req, res) {
  res.send(JSON.stringify("Hello from user controller"));
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }); //.select(
    //   "name username phone email forums"
    // );
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  let bookId = await User.findOne({ name: req.body.books }).select("_id");
  try {
    let user = new User({
      name: req.body.name,
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      books: bookId
    });
    user = await user
      .save()
      .then(user => user.populate("books").execPopulate());
    await Book.findOneAndUpdate(
      { _id: user.books },
      { $push: { bks: user._id } }
    );
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { Issue } = require("../models/booksModel");

router.get("/", function(req, res) {
  res.send(JSON.stringify("Hello from issue Controller"));
});

router.get("/:id", async (req, res) => {
  try {
    const issuebook = await Issue.findOne({ _id: req.params.id }); //.select(
    //   "name username phone email forums"
    // );
    res.status(200).send(issuebook);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let issue = new Issue({
      issueDate: req.body.issueDate,
      returnDueDate: req.body.returnDueDate,
      returnDate: req.body.returnDate,
      fineAmount: req.body.fineAmount
    });
    copy = await issue.save();
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

const mongoose = require("mongoose");

const schema = mongoose.Schema({
  text: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

const Review = mongoose.model("Review", schema);

module.exports = Review;

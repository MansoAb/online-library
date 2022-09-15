const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Book = mongoose.model("Book", schema);

module.exports = Book;

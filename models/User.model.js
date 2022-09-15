const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  isBlocked: {
    type: Boolean,
    default: false,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = mongoose.model("User", schema);

module.exports = User;

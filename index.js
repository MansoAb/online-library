const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());
app.use(require("./routes/book.routes"));
app.use(require("./routes/user.route"));
app.use(require("./routes/review.route"));
app.use(require("./routes/genre.route"));

mongoose.connect(
  "mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/bookLibrary",
  function () {
    console.log("Подключено к монго");
  }
);

app.listen(port, function (req, res) {
  console.log("Сервер запущен.");
});

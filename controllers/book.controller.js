const Book = require("../models/Book.model");
const User = require("../models/User.model");

module.exports.bookControllers = {
  showBooks: async (req, res) => {
    try {
      const books = await Book.find().populate("userId", "name");
      res.json(books);
    } catch (err) {
      res.json(err.message);
    }
  },
  showBook: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await User.findById(id);
      res.json(book);
    } catch (err) {
      res.json(err.message);
    }
  },
  addBook: async (req, res) => {
    const { name, userId } = req.body;
    try {
      await Book.create({ name, userId });
      res.json("Book added")
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      await Book.findByIdAndRemove(id);
      res.json("Book deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  takeBook: async (req, res) => {
    const { id, id2 } = req.params;
    try {
      const book = await Book.findById(id);
      const user = await User.findById(id2);
      if (
        book.userId === null &&
        user.isBlocked === false &&
        user.books.length < 3 &&
        user.books.includes(id) === false
      ) {
        await book.updateOne({ userId: id2 });
        await user.updateOne({ $push: { books: id } });
        return res.json("Книга арендована");
      } else if (user.books.includes(id) === true) {
        await book.updateOne({ userId: null });
        await user.updateOne({ $pull: { books: id } });
        return res.json("Книга сдана в библиотеку");
      } else if (book.userId != null) {
        return res.json("Книга уже кем то арендована.");
      } else if (user.isBlocked === true) {
        return res.json("Вы заблокированы за нарушение правил.");
      } else if (user.books.length === 3) {
        return res.json("Вы достигли лимита арендованных книг - 3");
      }
    } catch (err) {
      res.json(err.message);
    }
  },
};

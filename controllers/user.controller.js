const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.userControllers = {
  addUser: async (req, res) => {
    const { name } = req.body;
    try {
      await User.create({ name });
      res.json("User created");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      await User.findByIdAndRemove(id);
      res.json("User deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  blockUser: async (req, res) => {
    const { id, id2 } = req.params;
    try {
      const book = await Book.findById(id);
      const user = await User.findById(id2);
      
      if (user.books != null && user.books.includes(id)) {
        await user.updateOne({ books: [] });
        await user.updateOne({ inBlock: true });
        await book.updateOne({userId: null})
        return res.json("Книга отобрана, и чел заблокирован");
      } else {
        return res.json(
          "У этого человека нет никаких книг, так что оставь его в покое."
        );
      }
    } catch (err) {
      res.json(err.message);
    }
  },
};

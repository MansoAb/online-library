const Review = require("../models/Review.model");

module.exports.reviewControllers = {
  addReview: async (req, res) => {
    const { text, userId, bookId } = req.body;
    try {
      await Review.create({ text, userId, bookId });
      res.json("User added");
    } catch (err) {
      res.json(err.message);
    }
  },
};

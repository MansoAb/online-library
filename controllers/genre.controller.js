const Genre = require("../models/Genres.model");
const User = require("../models/User.model");

module.exports.genreControllers = {
  addGenre: async (req, res) => {
    try {
      await Genre.create(req.body.name);
      res.json("Genre created");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteGenre: async (req, res) => {
    const { id } = req.params;
    try {
      await Genre.findByIdAndRemove(id);
      res.json("genre deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  showGenres: async (req, res) => {
    try {
      const genres = await User.find();
      res.json(genres);
    } catch (err) {
      res.json(err.message);
    }
  },
};

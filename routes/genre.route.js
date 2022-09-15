const { Router } = require("express");
const router = Router();

const { genreControllers } = require("../controllers/genre.controller");

router.post("admin/genres", genreControllers.addGenre);
router.delete("admin/genres/:id", genreControllers.deleteGenre);
router.get("/genres", genreControllers.showGenres);

module.exports = router;

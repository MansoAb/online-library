const { Router } = require("express");
const router = Router();

const { bookControllers } = require("../controllers/book.controller");

router.get("/books", bookControllers.showBooks);
router.get("/books/:id", bookControllers.showBook);
router.post("/admin/books", bookControllers.addBook);
router.delete("admin/books/:id", bookControllers.deleteBook);
router.patch("/books/:id/user/:id2", bookControllers.takeBook);

module.exports = router;

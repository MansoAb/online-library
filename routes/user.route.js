const { Router } = require("express");
const router = Router();

const { userControllers } = require("../controllers/user.controller");

router.post("/users", userControllers.addUser);
router.patch("/admin/users/:id2/books/:id", userControllers.blockUser);
router.delete("/users/:id", userControllers.deleteUser);

module.exports = router;

const { Router } = require("express");
const router = Router();

const { reviewControllers } = require("../controllers/review.controller");

router.post("/reviews", reviewControllers.addReview);

module.exports = router;

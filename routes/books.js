const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

/* GET users listing. */
router.get("/", booksController.index);

module.exports = router;

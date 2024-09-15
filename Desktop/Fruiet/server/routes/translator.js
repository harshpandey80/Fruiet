const express = require("express");
const { translateText } = require("../controllers/translator"); // Adjust path as needed

const router = express.Router();

router.post("/translate", translateText);

module.exports = router;

const express = require("express");
const router = express.Router();
const productEndpoints = require("./productEndpoints");

// Routes Used
router.use(productEndpoints);

module.exports = router;

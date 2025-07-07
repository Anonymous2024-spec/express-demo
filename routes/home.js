const express = require("express");
const router = express.Router();

// get all route
router.get("/", (req, res) => {
  res.render("index", { title: "My Express router", message: "Helo" });
});

module.exports = router;

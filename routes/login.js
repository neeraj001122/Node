const express = require("express");
const path = require('path')
const router = express.Router();

router.use("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
}); 

router.use("/password", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;

const express = require("express");
const router = express.Router();

app.get('/', (req, res) => {
  res.json('Server is running');
})

module.exports = router;
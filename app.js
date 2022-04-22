// Require express module
const express = require("express");

// Create express app
const app = express();

// Port - either use port number provided by the environment or 3000
const port = process.env.port || 3000;

// Get API
app.get("/", (req, res, next) => {
  res.json("Hello API World");
});

// Listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

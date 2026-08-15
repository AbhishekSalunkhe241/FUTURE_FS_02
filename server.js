const express = require("express");
const app = require("./api/index");

const PORT = process.env.PORT || 5000;

// Serve static files from the public directory locally
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`🚀 CartNova Server running locally at http://localhost:${PORT}`);
});
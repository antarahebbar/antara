const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost/mern-stack-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

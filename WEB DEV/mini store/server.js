const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // serve index.html and images

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ministore")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/order", async (req, res) => {
  try {
    console.log("📦 Incoming order:", req.body);

    const order = new Order({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      items: req.body.items,
      total: req.body.total,
    });

    await order.save();

    res.json({ message: "Order placed successfully!" });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
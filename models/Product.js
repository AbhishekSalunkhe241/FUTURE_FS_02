const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  specs: [String],
  category: { type: String, default: "Electronics" },
  rating: { type: Number, default: 4.5 },
  oldPrice: { type: Number },
  discount: { type: String }
});

module.exports = mongoose.model("Product", productSchema);
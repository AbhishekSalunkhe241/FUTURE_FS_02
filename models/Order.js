const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  items: [
    {
      name: String,
      price: Number,
      quantity: { type: Number, default: 1 },
      image: String
    }
  ],
  total: { type: Number, required: true },
  paymentMethod: { type: String, default: "Cash on Delivery" },
  orderId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
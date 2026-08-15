const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Product = require("../models/Product");
const Order = require("../models/Order");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



// Fallback product data matching the database seed
const fallbackProducts = [
  {
    name: 'Wireless Headphones',
    price: 2999,
    oldPrice: 3499,
    discount: '14% OFF',
    category: 'Electronics',
    rating: 4.8,
    image: 'images/pexels-nick-8597722.jpg',
    specs: ['Bluetooth 5.0', 'Noise Cancellation', '20hr Battery Life', 'Fast Charging', 'Comfort Fit']
  },
  {
    name: 'Smart Watch',
    price: 4999,
    oldPrice: 6499,
    discount: '23% OFF',
    category: 'Accessories',
    rating: 4.7,
    image: 'images/pexels-energepic-com-27411-110471.jpg',
    specs: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking', 'Customizable Watch Faces']
  },
  {
    name: 'Bluetooth Speaker',
    price: 1999,
    oldPrice: 2499,
    discount: '20% OFF',
    category: 'Electronics',
    rating: 4.6,
    image: 'images/pexels-nejc-soklic-7862643-6023354.jpg',
    specs: ['10W Output', 'Portable Design', '6hr Battery Life', 'Hands-Free Calling', 'Splash Proof']
  },
  {
    name: 'Gaming Laptop',
    price: 59999,
    oldPrice: 69999,
    discount: '14% OFF',
    category: 'Computers',
    rating: 4.9,
    image: 'images/pexels-foysal-ahmed-2102283-6053279.jpg',
    specs: ['Intel i7', '16GB RAM', 'RTX 3060', '512GB SSD', 'RGB Keyboard']
  },
  {
    name: 'DSLR Camera',
    price: 45999,
    oldPrice: 52999,
    discount: '13% OFF',
    category: 'Cameras',
    rating: 4.8,
    image: 'images/pexels-pixabay-51383.jpg',
    specs: ['24MP', 'Wi-Fi', '4K Video', 'Interchangeable Lens', 'Dual SD Card Slots']
  },
  {
    name: 'Smartphone',
    price: 159900,
    oldPrice: 169900,
    discount: '6% OFF',
    category: 'Mobile',
    rating: 4.9,
    image: 'images/pexels-japy-29020349.jpg',
    specs: ['6.5" Display', '128GB Storage', '5000mAh Battery', 'Triple Camera Setup', '5G Support']
  },
  {
    name: 'Tablet',
    price: 19999,
    oldPrice: 22999,
    discount: '13% OFF',
    category: 'Mobile',
    rating: 4.5,
    image: 'images/pexels-asphotography-106341.jpg',
    specs: ['10" Display', '64GB Storage', 'Stylus Support', 'Split-Screen Multitasking', 'Quad Speakers']
  },
  {
    name: 'Wireless Mouse',
    price: 999,
    oldPrice: 1499,
    discount: '33% OFF',
    category: 'Accessories',
    rating: 4.6,
    image: 'images/pexels-bertellifotografia-13870517.jpg',
    specs: ['Ergonomic', 'Rechargeable', '2.4GHz', 'Silent Clicks', 'Adjustable DPI']
  },
  {
    name: 'Mechanical Keyboard',
    price: 3499,
    oldPrice: 4299,
    discount: '18% OFF',
    category: 'Computers',
    rating: 4.8,
    image: 'images/pexels-marcellino-andrian-209361-671629.jpg',
    specs: ['RGB Lighting', 'Blue Switches', 'USB-C', 'Anti-Ghosting', 'Durable Build']
  },
  {
    name: 'Smart TV',
    price: 39999,
    oldPrice: 45999,
    discount: '13% OFF',
    category: 'Smart Devices',
    rating: 4.7,
    image: 'images/pexels-han-798356342-33941646.jpg',
    specs: ['55" 4K', 'HDR', 'Android OS', 'Voice Control', 'Multiple HDMI Ports']
  }
];

let isConnected = false;

async function connectDB() {
  if (isConnected && mongoose.connection.readyState === 1) {
    return true;
  }
  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ministore";
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log("✅ MongoDB connected successfully");
    return true;
  } catch (err) {
    console.warn("⚠️ MongoDB connection notice:", err.message);
    return false;
  }
}

// GET /products
app.get("/products", async (req, res) => {
  try {
    const dbOk = await connectDB();
    if (dbOk) {
      const products = await Product.find();
      if (products && products.length > 0) {
        return res.json(products);
      }
    }
    // Return fallback products if DB empty or unavailable
    res.json(fallbackProducts);
  } catch (err) {
    console.error("Products endpoint error:", err);
    res.json(fallbackProducts);
  }
});

// POST /order
app.post("/order", async (req, res) => {
  try {
    const { name, email, phone, address, city, state, pincode, items, total, paymentMethod } = req.body;

    if (!name || !email || !address) {
      return res.status(400).json({ success: false, error: "Missing required order information." });
    }

    // Validate and calculate total server-side
    let calculatedTotal = 0;
    if (Array.isArray(items)) {
      calculatedTotal = items.reduce((sum, item) => {
        const itemPrice = Number(item.price) || 0;
        const itemQty = Number(item.quantity) || 1;
        return sum + (itemPrice * itemQty);
      }, 0);
    }
    const finalTotal = calculatedTotal > 0 ? calculatedTotal : Number(total) || 0;

    const generatedOrderId = "CN-" + Math.floor(100000 + Math.random() * 900000);

    const dbOk = await connectDB();
    if (dbOk) {
      const order = new Order({
        name,
        email,
        phone: phone || "",
        address: [address, city, state, pincode].filter(Boolean).join(", "),
        city: city || "",
        state: state || "",
        pincode: pincode || "",
        items: items || [],
        total: finalTotal,
        paymentMethod: paymentMethod || "Cash on Delivery",
        orderId: generatedOrderId,
      });
      await order.save();
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: generatedOrderId,
      total: finalTotal,
      customer: { name, email, address, city, state, pincode }
    });
  } catch (err) {
    console.error("❌ Error placing order:", err);
    res.status(500).json({ success: false, error: "Failed to place order. Please try again." });
  }
});

module.exports = app;

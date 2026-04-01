const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/ministore")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const products = [
  { name: 'Wireless Headphones', price: 2999, image: 'images/pexels-nick-8597722.jpg', specs: ['Bluetooth 5.0', 'Noise Cancellation', '20hr Battery Life', 'Fast Charging', 'Comfort Fit'] },
  { name: 'Smart Watch', price: 4999, image: 'images/pexels-energepic-com-274111-110471.jpg', specs: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking', 'Customizable Watch Faces'] },
  { name: 'Bluetooth Speaker', price: 1999, image: 'images/pexels-nejc-soklic-7862643-6023354.jpg', specs: ['10W Output', 'Portable Design', '6hr Battery Life', 'Hands-Free Calling', 'Splash Proof'] },
  { name: 'Gaming Laptop', price: 59999, image: 'images/pexels-foysal-ahmed-2102283-6053279.jpg', specs: ['Intel i7', '16GB RAM', 'RTX 3060', '512GB SSD', 'RGB Keyboard'] },
  { name: 'DSLR Camera', price: 45999, image: 'images/pexels-pixabay-51383.jpg', specs: ['24MP', 'Wi-Fi', '4K Video', 'Interchangeable Lens', 'Dual SD Card Slots'] },
  { name: 'Smartphone', price: 159900, image: 'images/pexels-japy-29020349.jpg', specs: ['6.5" Display', '128GB Storage', '5000mAh Battery', 'Triple Camera Setup', '5G Support'] },
  { name: 'Tablet', price: 19999, image: 'images/pexels-asphotography-106341.jpg', specs: ['10" Display', '64GB Storage', 'Stylus Support', 'Split-Screen Multitasking', 'Quad Speakers'] },
  { name: 'Wireless Mouse', price: 999, image: 'images/pexels-bertellifotografia-13870517.jpg', specs: ['Ergonomic', 'Rechargeable', '2.4GHz', 'Silent Clicks', 'Adjustable DPI'] },
  { name: 'Mechanical Keyboard', price: 3499, image: 'images/pexels-marcellino-andrian-209361-671629.jpg', specs: ['RGB Lighting', 'Blue Switches', 'USB-C', 'Anti-Ghosting', 'Durable Build'] },
  { name: 'Smart TV', price: 39999, image: 'images/pexels-han-798356342-33941646.jpg', specs: ['55" 4K', 'HDR', 'Android OS', 'Voice Control', 'Multiple HDMI Ports'] }
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("🌱 Database seeded with products");
  mongoose.connection.close();
}

seedDB();
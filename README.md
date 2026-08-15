# 🛍️ CartNova — Modern Full-Stack E-Commerce Application

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://cartnova-taupe.vercel.app)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

CartNova is a commercial-grade, responsive e-commerce web application featuring a modern UI design system, real-time product search & category filtering, slide-out cart drawer, wishlist drawer, interactive checkout flow, order placement API, and Vercel serverless deployment architecture.

🌐 **Live Production URL**: [https://cartnova-taupe.vercel.app](https://cartnova-taupe.vercel.app)  
📁 **GitHub Repository**: [https://github.com/AbhishekSalunkhe241/FUTURE_FS_02](https://github.com/AbhishekSalunkhe241/FUTURE_FS_02)

---

## ✨ Features

- 🎨 **Modern Commercial UI**: Designed with Indigo & Dark Slate palettes, Plus Jakarta Sans typography, Lucide icons, glassmorphism cards, and micro-animations.
- 📱 **Fully Responsive Layout**: Mobile-first design optimized for mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px) without horizontal scrolling.
- 🔍 **Dynamic Search & Filtering**: Real-time product search by name, category, or specs; price range slider filtering; multi-criteria sorting (Price Low→High, High→Low, Name A→Z, Rating); and filter reset.
- 🏷️ **Category Navigation**: 6 featured categories (*Electronics, Computers, Mobile, Accessories, Cameras, Smart Devices*) with interactive showcase cards and filter pills.
- 🛒 **Slide-Out Cart Drawer**: Quantity adjustment controls (- / +), line item subtotals, free express shipping progress bar, promo code engine (`CARTNOVA10`), and `localStorage` state persistence.
- ❤️ **Wishlist Engine**: Interactive heart toggle on product cards, saved items stored in `localStorage`, and dedicated Wishlist panel with "Move to Cart".
- 🔍 **Product Details Modal**: Glassmorphism backdrop modal with high-res product preview, full bulleted technical specifications, rating stars, price, and quick quantity selectors.
- 💳 **Form-Validated Checkout**: Comprehensive customer shipping form with validation, order summary item list, payment method selector (*Cash on Delivery* & *Online Payment UI demo*), and server-side total verification.
- 🎉 **Order Success Screen**: Animated green checkmark, generated reference Order ID (`#CN-XXXXXX`), customer details breakdown, total paid, and "Continue Shopping" CTA.
- 🔐 **Auth-Ready Login UI**: Polished modal with Sign In / Sign Up tab toggles, Remember Me, Forgot Password, and social login placeholders.
- ⚡ **Vercel Serverless Architecture**: Node.js Express serverless API routes (`/products`, `/order`) with MongoDB Atlas support and static fallback data.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | HTML5, Tailwind CSS CDN, Vanilla JavaScript (ES6+), Lucide Icons |
| **Typography** | Plus Jakarta Sans (Google Fonts) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Deployment** | Vercel Serverless Functions (`vercel.json` rewrites) |
| **State Persistence** | Browser `localStorage` (Cart & Wishlist) |

---

## 📂 Project Structure

```text
.
├── api/
│   └── index.js         # Serverless Express API entry point (Vercel & Local)
├── models/
│   ├── Product.js       # Extended Mongoose Product Schema
│   └── Order.js         # Extended Mongoose Order Schema
├── public/
│   ├── images/          # Product image assets
│   ├── index.html       # Single Page Application (UI, Components, Logic)
│   └── logo.png         # CartNova brand assets
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore configuration
├── package.json         # Dependencies & scripts
├── seed.js              # Database seeder script
├── server.js            # Express server entry point for local development
└── vercel.json          # Vercel serverless rewrite configuration
```

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/AbhishekSalunkhe241/FUTURE_FS_02.git
cd FUTURE_FS_02
```

### 2. Install dependencies
```bash
npm install
```

### 3. (Optional) Seed local MongoDB database
Ensure local MongoDB server is running on `mongodb://127.0.0.1:27017` and run:
```bash
node seed.js
```

### 4. Start local development server
```bash
npm start
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser.

---

## 🌐 Vercel Deployment Setup

1. Import the repository into your **[Vercel Dashboard](https://vercel.com/dashboard)**.
2. Under **Project Settings** -> **Environment Variables**, add:
   - `MONGODB_URI`: Your MongoDB Atlas connection string (e.g., `mongodb+srv://<user>:<password>@cluster.mongodb.net/cartnova?retryWrites=true&w=majority`).
3. Deploy! Vercel automatically routes `/` to `public/index.html` and API endpoints `/products` & `/order` to `api/index.js`.

# FUTURE_FS_02

A mini e-commerce storefront built with **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates a full-stack workflow including backend APIs, product seeding, and serving static assets.

---

## 🚀 Features

- Backend server with Express
- MongoDB models for products and orders
- Product seeding script (`seed.js`)
- Public assets (images, CSS, JS)
- Configured `.gitignore` to keep the repo clean
- Ready for deployment or extension with admin dashboard features

---

## 🛠️ Backend Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📂 Project Structure

```text
.
├── api/               # Vercel serverless entry point
├── models/            # Mongoose models (Product, Order)
├── public/            # Static assets (images, CSS, JS)
├── seed.js            # Script to seed products into MongoDB
├── server.js          # Express backend server
├── package.json       # Project dependencies and scripts
├── package-lock.json  # Locked dependency tree
├── vercel.json        # Vercel deployment configuration
└── .gitignore         # Ignored files
```

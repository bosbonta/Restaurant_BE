const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const menuRoutes = require("./routes/menuRoutes");

// Load .env
dotenv.config();

// Koneksi ke database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/menu", menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

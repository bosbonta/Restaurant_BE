const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Simpan pesanan ke database
router.post("/", async (req, res) => {
  try {
    const orderNumber = "ORD-" + Math.floor(Math.random() * 1000); // Generate nomor order

    const newOrder = new Order({
      orderNumber,
      items: req.body.items,
      total: req.body.total,
      date: new Date(),
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error });
  }
});

// Ambil semua pesanan
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error });
  }
});

// Hapus pesanan berdasarkan ID
router.delete("/:id", async (req, res) => {
  try {
    const orderId = req.params.id;
    await Order.findByIdAndDelete(orderId);
    res.json({ message: "Pesanan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error });
  }
});


module.exports = router;

const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

// GET: Ambil semua menu
router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST: Tambah menu baru
router.post("/", async (req, res) => {
  try {
    const newMenu = new Menu(req.body);
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: "Gagal menambahkan menu" });
  }
});

module.exports = router;

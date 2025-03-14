const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, enum: ["food", "drink"], required: true },
  bestSeller: { type: Boolean, default: false },
});

module.exports = mongoose.model("Menu", menuSchema);

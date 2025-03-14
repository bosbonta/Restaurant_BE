const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderNumber: String,
  items: [
    {
      name: String,
      price: Number,
    },
  ],
  total: Number,
  date: Date,
});

module.exports = mongoose.model("Order", OrderSchema);

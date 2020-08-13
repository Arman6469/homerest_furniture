const mongoose = require("mongoose");
const Schema = mongoose.Schema;

ObjectId = Schema.ObjectId


const ShopItem = new Schema({
  title: {
    type: String,
    max: 100,
    min: 2,
    required: true,
  },
  icon: {
    type: String,
    max: 100,
    min: 2,
    required: true,
  },
  category: {
    type: String,
    max: 100,
    min: 2,
    required: true,
  },
  all: {
    type: String,
    max: 100,
    min: 1,
    required: true,
  },
  products: [
    {
      furtype: String,
    }
  ]
});


module.exports = mongoose.model("ShopItem", ShopItem)
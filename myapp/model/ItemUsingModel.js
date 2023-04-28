const mongoose = require('mongoose')

const ItemUsingType = {
  icon: String, name: String, user: String, content: String
}
const ItemUsingModel = mongoose.model("itemUsing", new mongoose.Schema(ItemUsingType))

module.exports = ItemUsingModel

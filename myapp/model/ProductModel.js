const mongoose = require('mongoose')

const ProductType = {
  num: Number,
  firstname: String,
  lastname: String,
  label: [],
  storage: Number,
  integral: Number,
}
const ProductModel = mongoose.model("product", new mongoose.Schema(ProductType))

module.exports = ProductModel

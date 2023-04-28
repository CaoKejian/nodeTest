const mongoose = require('mongoose')

const ArticleType = {
  id: Number,
  title: String,
  item: [],
  content: String,
  user: String,
  webhttp: String,
  publish: String,
  collect: Number,
  like: Number,
  comment: Number
}
const ArticleModel = mongoose.model("article", new mongoose.Schema(ArticleType))

module.exports = ArticleModel

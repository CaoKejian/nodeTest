const mongoose = require('mongoose')

const HotSearchType = {
  name: String,
  id: String,
  user:Number,
  bite:String
}
const HotSearchModel = mongoose.model("HotSearch", new mongoose.Schema(HotSearchType))

module.exports = HotSearchModel

const mongoose = require('mongoose')

// const InfoType = {
//   id:Number,
//   parentId:Number,
//   createTime:String,
//   title:String,
//   level:Number,
//   sort:Number,
//   name:String,
//   icon:String,
//   hidden:Number
// }
const InfoType = {
  code:Number,
  data:[]
}
const InfoModel = mongoose.model("info",new mongoose.Schema(InfoType))

module.exports = InfoModel


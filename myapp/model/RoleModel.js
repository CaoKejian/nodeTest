const mongoose = require("mongoose")
const RoleType = {
  adminCount:Number,
  createTime:String,
  description:String,
  id:Number,
  name:String,
  sort:Number,
  status:Number
}
const RoleModel = mongoose.model("Role", new mongoose.Schema(RoleType))

module.exports = RoleModel

const mongoose = require("mongoose")
const AdminUserType = {
  createTime:String,
  email:String,
  id:Number,
  loginTime:String,
  nickName:String,
  note:String,
  password:String,
  status:Number,
  userName:String
}
const AdminUserModel = mongoose.model("adminUser", new mongoose.Schema(AdminUserType))

module.exports = AdminUserModel

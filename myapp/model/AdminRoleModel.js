const mongoose = require("mongoose")
const AdminRoleType = {
  id: Number,
  createTime: String,
  email: String,
  icon: String,
  data:[],
  id: Number,
  loginTime: String,
  nickName: String,
  note: String,
  password: String,
  status: Number,
  username: String,
}
const AdminRoleModel = mongoose.model("adminRole", new mongoose.Schema(AdminRoleType))

module.exports = AdminRoleModel

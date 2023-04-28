const mongoose = require("mongoose")

const UserType = {
  username:String,
  password:String,
}
const UserModel = mongoose.model("user",new mongoose.Schema(UserType))

module.exports = UserModel


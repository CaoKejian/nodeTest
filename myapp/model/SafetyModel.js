const mongoose = require("mongoose")

const SafetyType = {
  username: String,
  pdSafety: String,
  phSafety: String,
  mbSafety: [],
  mailSafety: String
}
const SafetyModel = mongoose.model("Safety", new mongoose.Schema(SafetyType))

module.exports = SafetyModel


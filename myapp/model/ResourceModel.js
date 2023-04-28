const mongoose = require('mongoose')

const ResourceType = {
  number: Number,
  name: String,
  address: String,
  content: String,
  addData: String
}
const ResourceModel = mongoose.model("Resource", new mongoose.Schema(ResourceType))

module.exports = ResourceModel

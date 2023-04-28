const mongoose = require('mongoose')

const CityType = {
  name: String,
  id: String
}
const CityModel = mongoose.model("city", new mongoose.Schema(CityType))

module.exports = CityModel

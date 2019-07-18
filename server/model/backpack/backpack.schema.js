const mongoose = require("mongoose");

const BackpackSchema = mongoose.Schema({
  name: String,
  description: String,
  img: String,
  designer: {type: String, default: "N/A"},
  year: {type: String, default: "2019"},
  NumbeInStock: {type: String, default: ""}
}, {collection: "backpack"});

module.exports = BackpackSchema;
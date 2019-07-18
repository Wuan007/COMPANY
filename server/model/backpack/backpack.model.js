const mongoose = require("mongoose");
const BackpackSchema = require("./backpack.schema");
const BackpackModel = mongoose.model("BackpackModel", BackpackSchema);

// Find all backpacks
BackpackModel.findAllBackpacks = () => {
  return BackpackModel.find();
}

// Create backpack
BackpackModel.createBackpack = (backpack) => {
  return BackpackModel.create(backpack);
}

// Delete backpack
BackpackModel.deleteBackpack = (id) => {
  return BackpackModel.deleteOne({_id: id});
}

// Update backpack
BackpackModel.updateBackpack = (backpack) => {
  return BackpackModel.updateOne({_id: backpack._id}, backpack);
} 

module.exports = BackpackModel;
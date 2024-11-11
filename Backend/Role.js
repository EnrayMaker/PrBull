const mongoose = require("mongoose");

var Role = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    default: ["USER"],
  },
});

module.exports = mongoose.model("Role", Role);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  displayName: String,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);

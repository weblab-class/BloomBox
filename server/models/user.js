const mongoose = require("mongoose");
// import WhereThisFlowerBlooms from "../../client/src/assets/images/WhereThisFlowerBlooms.jpg";

// const SongSchema = new mongoose.Schema({
//   image: {
//     type: String,
//     default: WhereThisFlowerBlooms,
//   }
// });

const UserSchema = new mongoose.Schema({
  email: String,
  displayName: String,
  songIndex: {
    type: Number,
    default: 0,
  },
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);

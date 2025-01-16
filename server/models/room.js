const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    type: String,
    sdp: String,
});

const RoomSchema = new mongoose.Schema({
    roomId: String,
    participants: [String],
    offer: OfferSchema,
});

module.exports = mongoose.model("room", RoomSchema)
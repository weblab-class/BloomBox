/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Room = require("./models/room");


const auth = require("./auth");

const webRTC = require("./webRTC");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

// router.get("/login", spotify_auth.login);
router.get("/users/authorize", auth.authorize);
router.get("/users/create", auth.create);
router.get("/users/current", auth.current);
router.post("/rooms/create", webRTC.createRoom);
router.get("/rooms/listen/:roomId", webRTC.listen);


// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;

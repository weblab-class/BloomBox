/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");


const auth = require("./auth");


// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();


router.get("/users/authorize", auth.authorize);
router.get("/users/create", auth.create);
router.get("/users/current", auth.getCurrentUser);
router.post("/users/current/update", auth.updateUser);
// router.post("/users/update/song", auth.updateSong);
// router.post("/rooms/create", null);
// router.get("/rooms/listen/:roomId", null);

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;

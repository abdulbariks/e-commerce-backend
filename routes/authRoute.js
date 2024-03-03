const express = require("express");
const {
  createUser,
  getallUser
} = require("../controller/userCtrl");

const router = express.Router();

router.get("/all-users", getallUser);
router.post("/register", createUser);


module.exports = router;
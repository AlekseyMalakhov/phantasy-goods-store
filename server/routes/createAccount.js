const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../db/queries");

//createAccount
router.post("/", db.createUser);

module.exports = router;

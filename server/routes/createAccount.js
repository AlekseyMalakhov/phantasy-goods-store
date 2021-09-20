const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//createAccount
router.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).send("ok");
});

module.exports = router;

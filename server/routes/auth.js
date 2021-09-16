const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//login
router.post("/", (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    const token = jwt.sign({ email }, "mySuperPrivateKey");

    res.status(200).send(token);
});

module.exports = router;

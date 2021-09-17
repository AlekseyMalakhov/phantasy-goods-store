const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const user = {
    email: "www@www.ww",
    password: "12345",
};

//login
router.post("/", (req, res) => {
    const { email, password } = req.body;
    if (!user || user.password !== password) {
        return res.status(401).send({ error: "Invalid email or password." });
    }

    const token = jwt.sign({ email }, "mySuperPrivateKey");
    res.status(200).send(token);
});

module.exports = router;

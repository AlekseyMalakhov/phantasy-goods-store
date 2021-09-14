const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

//login
app.post("/login", (req, res) => {
    const user = req.body;
    console.log(user);
});

//start the server
app.listen(port, () => {
    console.log(`Phantasy goods store is listening at port ${port}`);
});

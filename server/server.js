const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const auth = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.use("/api/login", auth);

//start the server
app.listen(port, () => {
    console.log(`Phantasy goods store is listening at port ${port}`);
});

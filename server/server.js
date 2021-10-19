const express = require("express");
const sharp = require("sharp");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const db = require("./db/queries");
const jwt = require("jsonwebtoken");
const accessTokenSecret = require("./accessTokenSecret");

app.use(cors());
app.use(express.json());

const multer = require("multer");
const multerS3 = require("multer-s3-transform");
//Amazon
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
    region: "eu-central-1",
    credentials: {
        accessKeyId: "AKIA6JAXQY7WVJP4CNH2",
        secretAccessKey: "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",
    },
});

const uploadImgToAmazon = multer({
    storage: multerS3({
        s3: s3,
        bucket: "phantasy-goods-store",
        acl: "public-read",
        shouldTransform: function (req, file, cb) {
            cb(null, /^image/i.test(file.mimetype));
        },
        transforms: [
            {
                key: function (req, file, cb) {
                    cb(null, Date.now().toString() + "_min" + file.originalname);
                },
                transform: function (req, file, cb) {
                    if (req.route.path === "/api/createAccount") {
                        cb(null, sharp().resize(150, 150).jpeg());
                    }
                    if (req.route.path === "/api/addItem") {
                        cb(null, sharp().resize(400, 400).jpeg());
                    }
                },
            },
        ],
    }),
});
//end Amazon

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, accessTokenSecret, (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.post("/api/login", db.login);
app.post("/api/createAccount", uploadImgToAmazon.single("img"), db.createUser);
app.post("/api/sendMessage", authenticateJWT, db.sendMessage);
app.get("/api/getMessages", authenticateJWT, db.getMessages);
app.post("/api/addItem", authenticateJWT, uploadImgToAmazon.array("images", 5), db.addItem);
app.get("/api/getItems", db.getItems);
app.get("/api/refreshToken", db.refreshToken);

//start the server
app.listen(port, () => {
    console.log(`Phantasy goods store is listening at port ${port}`);
});

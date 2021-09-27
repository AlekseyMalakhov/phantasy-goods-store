const Pool = require("pg").Pool;
const jwt = require("jsonwebtoken");

const connectionString = "postgres://zrhjogpc:RKMN42zFlEorpu5PbVPxzCsg_U5jInQZ@hattie.db.elephantsql.com/zrhjogpc";
const pool = new Pool({ connectionString });

const createUser = async (req, res) => {
    let img = "";
    if (req.file) {
        img = req.file.transforms[0].location;
    }
    const { name, email, password } = JSON.parse(req.body.text);
    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const existingUser = response1.rows[0];
        if (!existingUser) {
            const query2 = {
                text: "INSERT INTO users (name, email, password, img) VALUES($1, $2, $3, $4) RETURNING id",
                values: [name, email, password, img],
            };
            pool.query(query2, (error, results) => {
                if (error) {
                    res.status(500).send(error.detail);
                    return;
                }
                res.status(201).send(`User added with ID: ${results.rows[0].id}`);
            });
        } else {
            res.status(409).send("Current email already exists");
        }
    } catch (err) {
        console.log(err.stack);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const user = response1.rows[0];
        if (!user || user.password !== password) {
            return res.status(401).send({ error: "Invalid email or password." });
        }
        const sendUser = { ...user };
        delete sendUser.password;
        const token = jwt.sign(sendUser, "mySuperPrivateKey");
        res.status(200).send(token);
    } catch (error) {
        console.log(err.stack);
    }
};

module.exports = {
    createUser,
    login,
};

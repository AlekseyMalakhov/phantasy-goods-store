const Pool = require("pg").Pool;
const jwt = require("jsonwebtoken");

const connectionString = "postgres://zrhjogpc:RKMN42zFlEorpu5PbVPxzCsg_U5jInQZ@hattie.db.elephantsql.com/zrhjogpc";

const pool = new Pool({ connectionString });

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };
    try {
        const response1 = await pool.query(query1);
        const existingUser = response1.rows[0];
        console.log(existingUser);
        if (!existingUser) {
            const query2 = {
                text: "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING id",
                values: [name, email, password],
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

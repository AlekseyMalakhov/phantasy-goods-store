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
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
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
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const sendMessage = async (req, res) => {
    const { fromId, toId, text, date } = req.body;
    const query = {
        text: "INSERT INTO messages (from_id, to_id, text, date) VALUES($1, $2, $3, $4) RETURNING id",
        values: [fromId, toId, text, date],
    };
    try {
        const response = await pool.query(query);
        console.log(`Message added with ID: ${response.rows[0].id}`);

        res.status(201).send(`Message added with ID: ${response.rows[0].id}`);
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const getMessages = async (req, res) => {
    const userId = req.query.userId;
    const outgoingMessagesQuery = {
        text: `SELECT messages.id, from_id, to_id, text, date, name AS to_id_name, type 
                FROM messages 
                INNER JOIN users ON to_id = users.id 
                INNER JOIN message_types ON type = 'outgoing' 
                WHERE from_id = $1`,
        values: [userId],
    };
    const incomingMessagesQuery = {
        text: `SELECT messages.id, from_id, to_id, text, date, name AS from_id_name, type 
                FROM messages 
                INNER JOIN users ON from_id = users.id 
                INNER JOIN message_types ON type = 'incoming' 
                WHERE to_id = $1`,
        values: [userId],
    };
    try {
        const incoming = await pool.query(outgoingMessagesQuery);
        const outgoing = await pool.query(incomingMessagesQuery);
        const messages = {
            incoming: incoming.rows,
            outgoing: outgoing.rows,
        };
        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

const addItem = async (req, res) => {
    let images = [];
    if (req.files) {
        images = req.files.map((file) => file.transforms[0].location);
    }
    images = JSON.stringify(images);
    const { name, type, description, price, seller } = JSON.parse(req.body.text);
    try {
        const query = {
            text: "INSERT INTO items (name, type, description, price, seller, images) VALUES($1, $2, $3, $4, $5, $6) RETURNING id",
            values: [name, type, description, price, seller, images],
        };
        pool.query(query, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send(error);
                return;
            }
            res.status(201).send(`Item added with ID: ${results.rows[0].id}`);
        });
    } catch (error) {
        console.log(error.stack);
        res.status(500).send(error.stack);
    }
};

const getItems = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM items");
        const _items = result.rows.map((item) => {
            item.images = JSON.parse(item.images);
            return item;
        });

        Promise.all(
            _items.map(async (item) => {
                const sellerQuery1 = {
                    text: "SELECT * FROM users WHERE id = $1",
                    values: [item.seller],
                };
                const sellerRow = await pool.query(sellerQuery1);
                const seller = {
                    id: item.seller,
                    name: sellerRow.rows[0].name,
                };
                item.seller = seller;
                return item;
            })
        ).then((items) => {
            res.status(200).send(items);
        });
    } catch (error) {
        res.status(500).send(error.stack);
        console.log(error.stack);
    }
};

module.exports = {
    createUser,
    login,
    sendMessage,
    getMessages,
    addItem,
    getItems,
};

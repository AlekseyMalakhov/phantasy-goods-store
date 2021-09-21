const Pool = require("pg").Pool;

const connectionString = "postgres://zrhjogpc:RKMN42zFlEorpu5PbVPxzCsg_U5jInQZ@hattie.db.elephantsql.com/zrhjogpc";

const pool = new Pool({ connectionString });

const createUser = async (request, response) => {
    const { name, email, password } = request.body;

    const query1 = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email],
    };

    try {
        const res = await pool.query(query1);
        const existingUser = res.rows[0];
        console.log(existingUser);
        if (!existingUser) {
            const query2 = {
                text: "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING id",
                values: [name, email, password],
            };

            pool.query(query2, (error, results) => {
                if (error) {
                    response.status(500).send(error.detail);
                    return;
                }
                response.status(201).send(`User added with ID: ${results.rows[0].id}`);
            });
        } else {
            response.status(409).send("Current email already exists");
        }
    } catch (err) {
        console.log(err.stack);
    }
};

module.exports = {
    createUser,
};

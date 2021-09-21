const Pool = require("pg").Pool;

const connectionString = "postgres://zrhjogpc:RKMN42zFlEorpu5PbVPxzCsg_U5jInQZ@hattie.db.elephantsql.com/zrhjogpc";

const pool = new Pool({ connectionString });

const createUser = (request, response) => {
    const { name, email, password } = request.body;

    const query = {
        text: "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING id",
        values: [name, email, password],
    };

    pool.query(query, (error, results) => {
        console.log(results);
        //console.log(results.rows[0]);
        if (error) {
            response.status(500).send(error.detail);
            return;
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    });
};

module.exports = {
    createUser,
};

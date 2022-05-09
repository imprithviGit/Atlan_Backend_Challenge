const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "admin10#",
    port: 5432,
    database: "atlan"
});

module.exports = pool;
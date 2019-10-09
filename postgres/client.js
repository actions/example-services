const { Client } = require('pg')

console.log("PORT: " + process.env.POSTGRES_PORT + " HOST:" + process.env.POSTGRES_HOST)
const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

pgclient.connect();

pgclient.query('SELECT NOW()', (err, res) => {
    if (err) throw err
    console.log(res)
    pgclient.end()
});

console.log("PORT: " + process.env.POSTGRES_PORT + " HOST:" + process.env.POSTGRES_HOST)

const { Client } = require('pg')

const pgclient = new Client({
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

pgclient.connect();

pgclient.query('SELECT NOW()', (err, res) => {
    if (err) throw err
    console.log(res)
    pgclient.end()
});

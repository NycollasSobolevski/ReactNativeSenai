const post = require("pg");
const {Client} = require('pg');

const client = new Client(
    {
        user:'postgres',
        host:'localhost',
        database: "postgres",
        password:'senai123',
        port:5432
    }
)


module.exports = client;
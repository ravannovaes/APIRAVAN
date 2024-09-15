/*const pg = require('pg')

const client = new pg.Client( {
     user: 'postgres',
     host:'localhost',
     database:'escola',
     password:'ravan1927',
     port:5432,

}
) */

const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'escola',
    password:'123456',
    port:5432,
});

module.exports = pool  

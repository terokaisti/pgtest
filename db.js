const { Client } = require('pg');
const { USER, PASS, HOST, DB } = process.env;
const connectionString =  `postgresql://${USER}:${PASS}@${HOST}/${DB}`;
const client = new Client({connectionString});
client.connect();

module.exports.getTs = () => client.query('SELECT CURRENT_TIMESTAMP')
  .then(res => res.rows[0].now);

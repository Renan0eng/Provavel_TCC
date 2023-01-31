const myaql = require('mysql2/promise');

const connection = myaql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'menu-fit',
});

module.exports = connection;
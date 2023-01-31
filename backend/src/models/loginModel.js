const connection = require('./connection');
const md5 = require('crypto-md5');

const login = async (email, password) => {
  const user = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email
  , md5(`${
    password}`, 'hex')]);
  return user[0];
}

const create = async (name, email, password) => {
  const user = connection.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, md5(`${password}`, 'hex')]);
  return user;
}

const validaEmail = async (email) => {
  const user = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  return user[0];
}


module.exports = {
    validaEmail,
    login,
    create
}
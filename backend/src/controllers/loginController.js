const loginModel = require('../models/loginModel');
const md5 = require('crypto-md5');

const login = async (req, res) => {
  console.log("req",req.body);
  const { email, password } = req.body;

  const login = await loginModel.login(email, password);
  

  let token = "error";

  if (login.length != 0) {
    token = md5(`${email}${password}`);
  }
  console.log("login", login);

  // remove o compo password do objeto login
  login.push({ token: token , statusLogin: "ok"});
  // delete login[0].password;a
  console.log("login", login);


  return res.status(200).json({ login });

}

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const login = await loginModel.create(name, email, password);


  return res.status(201).json({ login , token: "ok"});

}

const validaEmail = async (req, res) => {
  const { email } = req.body;

  const login = await loginModel.validaEmail(email);

  let token

  if (login.length != 0) {
    token =
      "Email já cadastrado";
  } else {
    token = 
      "ok";
  }

  return res.status(200).json({token: token });

}



module.exports = {
    validaEmail,
    login,
    create
}
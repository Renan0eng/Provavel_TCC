const express = require('express');
const router = express.Router();

const esp32Controller = require('./controllers/controllersController/esp32Controller');

router.get("/esp32", esp32Controller.getAll);

module.exports = router;
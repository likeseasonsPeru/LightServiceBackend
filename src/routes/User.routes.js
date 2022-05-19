const user = require('express').Router();
const { loginController, registerController } = require('../controllers/User.controller')

user.post('/login', loginController);

user.post('/register', registerController);

module.exports = user;
const route = require('express').Router()
const { UserController } = require('../controllers/userController');

route.post("/register", UserController.register)
route.post("/login", UserController.login)
route.post("/googlelogin", UserController.googleLogin)

module.exports = route


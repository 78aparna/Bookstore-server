//import express
const express = require('express')
const userController = require('../controller/usercontroller')
const bookController = require('../controller/bookController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
//create Router object
const router = new express.Router()

//define path for client api request
//register

router.post('/register',userController.registerController)
module.exports = router

//login
router.post('/login',userController.loginController)
module.exports = router
//google login
router.post('/google/sign-in',userController.googleLoginController)
module.exports = router
//............authorised user.................

router.post('/user/book/add',jwtMiddleware,multerMiddleware.array('uploadImages',3),bookController.addBookController)
module.exports = router

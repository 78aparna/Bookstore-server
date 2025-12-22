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

//get home books
router.get('/books/home',bookController.getHomePageBooksController)
module.exports = router
//............authorised user.................

router.post('/user/book/add',jwtMiddleware,multerMiddleware.array('uploadImages',3),bookController.addBookController)
module.exports = router

//get all books page
router.get('/books/all',jwtMiddleware,bookController.getUserAllBookPageController)
module.exports = router
//get all user upload books page
router.get('/user-books/all',jwtMiddleware,bookController.getUserUploadBookProfilePageController)
module.exports = router
//get all user bought book page
router.get('/user-books/bought',jwtMiddleware,bookController.getUserBoughtBookProfilePageController)
module.exports = router
//get single book page
router.get('/books/:id/view',jwtMiddleware,bookController.viewBookcontroller)
//import .env cors and express
// loads .env file content into process.env by default

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routing')

//create server using express
const bookstoreServer = express()
//enable cors in express server
bookstoreServer.use(cors())
//add json parser to server
bookstoreServer.use(express.json())
//use router in server
bookstoreServer.use(router)
//create a port where server shold listen in web
const PORT = 3000
//server listen in thet port
bookstoreServer.listen(PORT,()=>{
    console.log("bookstore server started....waiting for client request");
    
})
//resolve http get request to localhost 3000 using server
bookstoreServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>bookstore server started....waiting for client request</h1>`)
})

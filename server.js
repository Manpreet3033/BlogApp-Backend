const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnection = require('./Config/database')
const routes = require('./Routes/routes')
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1 style="display: flex; align-items: center; justify-content:center;">Welcome to Homepage</h1>')
})

app.use("/api/v1",routes);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

dbConnection();
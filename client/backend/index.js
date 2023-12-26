const express = require('express')
const app = express()
const mongoose=require('mongoose')
const mongoDB = require('./db')
const subModel=require('./models/Subscribers')
const port=3001

mongoDB()
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000'),
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With, Content-Type, Accept"
  ),
  next()
})
app.use(express.json())
app.use('/api', require("./routes/Subscribers"))
app.use('/api',require('./routes/Login'))
app.use('/api', require("./routes/Users"))

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port,()=>{
    console.log(`Our app is listening ${port}`)
})
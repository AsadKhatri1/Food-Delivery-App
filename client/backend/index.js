const express = require('express')
const app = express()
const mongoose=require('mongoose')
const mongoDB = require('./db')
const subModel=require('./models/Subscribers')
const port=8000
const cors=require('cors')
mongoDB()
app.use(cors())
app.use(express.json())
app.use('/api', require("./routes/Subscribers"))
app.use('/api',require('./routes/Login'))
app.use('/api', require("./routes/Users"))
app.use('/api', require("./routes/Data"))

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port,()=>{
    console.log(`Our app is listening ${port}`)
})
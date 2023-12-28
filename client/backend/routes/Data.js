const express=require('express')
const mongoose=require('mongoose')
const router = express.Router()

router.get('data', async(req, res)=>{
    req.send('Data page')
})

module.exports=router
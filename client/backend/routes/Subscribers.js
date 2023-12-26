const express=require('express')
const router = express.Router()
const subModel=require('../models/Subscribers')


router.post('/subscriber' , async (req,res)=>{
     try{
      await  subModel.create({
            name:"Asad",
            email:"123@gmail.com",
        })
        res.send('User created')

    }catch(err){
        console.log(err)

    }
})

module.exports= router
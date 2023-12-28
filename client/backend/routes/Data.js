const express=require('express')
const mongoose=require('mongoose')
const router = express.Router()

router.post('foodData', async(req, res)=>{
   try{
    res.send([global.fetchedData,global.fetchedCtaegory])

   }catch(err){
res.send('server error')
    console.log(err)
   }
})

module.exports=router
const express=require('express')
const mongoose=require('mongoose')

const subSchema=mongoose.Schema({
    name:String,
    email:String,
    date:{
        type:Date,
        default:Date.now()
    }
})
const subModel=mongoose.model('subscribers',subSchema)
module.exports=subModel
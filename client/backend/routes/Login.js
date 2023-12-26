const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

const userModel = require('../models/Users')


router.post('/loginuser', async (req, res) => {
    let email = req.body.email

    try {

        let userExists = await userModel.findOne({ email })

        if (!userExists) {
            return res.status(400).json({ msg: 'email not found' })

        }
        if (req.body.password !== userExists.password) {
            return res.status(400).json({ msg: 'incorrect password' })
        }
        else{
            return  res.status(200).json({msg:'user is found'})
        }
       

    } catch (err) {
        console.log(err)

    }
})

module.exports = router
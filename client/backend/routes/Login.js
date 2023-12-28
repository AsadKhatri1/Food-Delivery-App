const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const userModel = require('../models/Users')


router.post('/loginuser', async (req, res) => {
    let email = req.body.email
    let secret = 'qwertyuiop'
    try {

        let userExists = await userModel.findOne({ email })
        const payload={
            user:{
                email:userExists.email
            }
        }
        const authToken=jwt.sign(payload, secret)

        if (!userExists) {
            return res.status(400).json({ msg: 'email not found' })

        }
        if (req.body.password !== userExists.password) {
            return res.status(400).json({ msg: 'incorrect password' })
        }
        // const payload={
        //     user:{
        //         id:userExists.id
        //     }
        // }
        // const authToken=jwt.sign(payload, secret)
        else {
            return res.status(200).json({ msg: 'user is found', authToken:authToken })
        }


    } catch (err) {
        console.log(err)

    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

const userModel = require('../models/Users')


router.post('/users', [body('email').isEmail(),
body('password').isLength({ min: 8 })], async (req, res) => {

    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
       
        await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json("User created")

    } catch (err) {
        console.log(err)

    }
})

module.exports = router
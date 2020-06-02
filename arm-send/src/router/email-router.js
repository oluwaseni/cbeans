
const express = require('express')
const Email = require('../models/email-model')
// const auth = require('../middleware/auth')
// const multer = require('multer')
// const sharp = require('sharp')
const { sendMessageEmail } = require('../emails/messages')
const router = new express.Router() 



router.post('/email', async (req, res) => {
    const myEmail = 'it@armpension.com'
    const email = new Email(req.body)
    // (email, userName, userEmail, userNumber, UserMessage)
    try {
        // await email.save()
        sendMessageEmail(myEmail, email.name, email.email, email.mobile, email.message)
        // const token = await email.generateAuthToken()
        res.status(201).send({email})
    } catch (error) {
        res.status(400).send()
    }
})

module.exports = router
const express = require('express')
require('./db/mongoose')
const emailRouter = require('./router/email-router')

const app = express()
const port = process.env.PORT

app.use(express.json())
//configuring express
app.use(emailRouter)

app.listen(port, ()=>{
    console.log('server is up on '+ port)
})
const express = require('express')
require('./db/mongoose')
const quoteRouter = require('./routes/quote')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(quoteRouter)

app.listen(port, () =>{
    console.log('Server is up on port '+ port)
})
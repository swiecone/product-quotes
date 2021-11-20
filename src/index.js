const path = require('path')
const express = require('express')
require('./db/mongoose')
const quoteRouter = require('./routes/quote')
const websiteRouter = require('./routes/website')
const userRouter = require('./routes/user')

// const publicDirectoryPath = path.join(__dirname, 'public')
// console.log(publicDirectoryPath)


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('Get responses have been disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('site on maintanance mode')
// })


app.use(express.json())

app.use(quoteRouter)
app.use(userRouter)
//app.use(express.static(publicDirectoryPath))
app.use(websiteRouter)

app.listen(port, () =>{
    console.log('Server is up on port '+ port)
})


const express = require('express')
const router = new express.Router()

//Paint the home page  
router.get('', async (req, res) =>{
    res.send('This is the home page')
})

//Paint the about page   
router.get('/about', async (req, res) =>{
    res.send('This is the about page')
})

//Paint the help page   
router.get('/help', async (req, res) =>{
    res.send('This is the help page')
})

module.exports = router 
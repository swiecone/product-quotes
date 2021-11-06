const express = require('express')
const router = new express.Router()
const Quote = require('../models/quote')

//Create a new quote 
router.post('/quotes', async (req, res) =>{
    const quote = new Quote(req.body)
    console.log(quote)

    try {
        await quote.save()
        res.status(201).send(quote)
    } catch (e) {
        res.status(400).send(e)
    }

})

//Read all quotes 
router.get('/quotes', async (req, res) =>{

    try {
        const quotes = await Quote.find({})
        res.send(quotes)
    } catch (e) {
        res.status(400).send(e)
    }
})


//Get one specific quote from the list 
router.get('/quotes/:id', async (req, res) =>{
    const _id = req.params.id 

    try {
        const quote = await Quote.findById({_id})

        if (!quote) {
            res.status(404).send("task not found")
        } 
        res.send(quote)
    } catch (e) {
        res.status(400).send(e)
    }

})



//Update a quote 
router.patch('/quotes/:id', async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['quote', 'author']
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send('error: Invalid parameter in the update ')
    }

    try {    
    const quote = await Quote.findById(req.params.id)
 
        if (!quote) {
            return res.status(404).send('No task found, please check if user exists')
        }

        updates.forEach((update) =>  quote[update] = req.body[update])
        await quote.save()   
        res.send(quote)

    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/quotes/:id', async (req, res) =>{
    
    try {
        const quote = await Quote.findByIdAndDelete(req.params.id)
        console.log(req.params.id)
//        console.log(task)
        
        if (!quote) {
            return res.status(404).send("The task you want to delete has not been found")
        }

        res.send(quote)
    
    } catch (e) {
        res.status(500).send("The error is: " +e)
    }
})



module.exports = router 
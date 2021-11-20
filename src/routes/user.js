const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')


router.post('/users', async (req, res) => {

        const user = new User(req.body)
        const token = await user.generateAuthToken()    

    try {
        await user.save()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        console.log(user)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        res.status(400).send()
    }
})

//Read all users 
router.get('/users', auth, async (req, res) =>{
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(400)
    }
})

//Read one users 
router.get('/users/:id', auth,  async (req, res) =>{
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})



//Update a user 
router.patch('/users/:id',auth,  async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'email', 'password', 'admin']
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send('error: Invalid parameter in the update ')
    }

    try {    
    const user = await User.findById(req.params.id)
 
        if (!user) {
            return res.status(404).send('No user found, please check if the user exists')
        }

        updates.forEach((update) =>  user[update] = req.body[update])
        await user.save()   
        res.send(user)

    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete a user 
router.delete('/users/:id', auth, async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        
        if (!user) {
            return res.status(404).send("The user you want to delete has not been found")
        }
        res.send(user)
    
    } catch (e) {
        res.status(500).send("The error is: " +e)
    }
})



module.exports = router 
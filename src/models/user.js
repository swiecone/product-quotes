const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true 
    }, 
    age: {
        type: Number,
        required: true, 
        validate(value) {
            if (value <= 16 ) {
                throw new Error('Age must be over 16 years')
            }
        }
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true, 
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Please insert a valid email')
            }
        }
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 8
    },
    admin: {
        type: Boolean
    }
})


userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}



//Hash the user password before saving 
userSchema.pre('save', async function (next) 
{
const user = this 

if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)

}

next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
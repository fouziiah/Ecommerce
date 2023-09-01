const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// const user = require('../models/')

function generateToken(user){
    const payload = {id: user._id, username: user.username}
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
    return token
}


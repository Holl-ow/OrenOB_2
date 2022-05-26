const {Schema, model} = require('mongoose')

schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: "USER"}
})


module.exports = model('User', schema)
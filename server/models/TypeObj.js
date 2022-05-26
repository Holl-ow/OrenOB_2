const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    name: {type: String, required: true, unique: true}
}, { collection: 'types_object' })


module.exports = model('TypeObj', schema)
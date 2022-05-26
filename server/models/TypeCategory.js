const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    name: {type: String, required: true, unique: true}
}, { collection: 'types_category' })


module.exports = model('TypeCategory', schema)
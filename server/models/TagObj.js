const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    name: {type: String, required: true, unique: true},
    count: {type: Number, required: true, unique: true}
}, { collection: 'tags_object' })


module.exports = model('TagObj', schema)
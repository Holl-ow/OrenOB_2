const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    id_object: {type: Types.ObjectId , ref: 'Object'},
    id_user: {type: Types.ObjectId , ref: 'User'},
    comment: {type: String, required: false},
    mark: {type: Number, required: true}
}, { collection: 'user_comments' })


module.exports = model('UserComment', schema)
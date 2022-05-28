const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    name: {type: String, required: true, unique: true},
    category: {type: Types.ObjectId, ref: 'Category'},
    type: {type: Types.ObjectId, ref: 'Type'},
    adress: {type: String, required: true},
    working_time: {type: String, required: true},
    working_days: {type: String, required: true},
    description: {type: String, required: false},
    phone: {type: String, required: false},
    web: {type: String, required: false},
    clicks: {type: Number, default: 0},
    average_mark: {type: String, default: 0},
    tags: [{type: Number, required: false}],
    comments: [{type: Types.ObjectId, ref: 'UserComment'}],
    picture: {type: String, required: false},
}, { collection: 'objects' })


module.exports = model('Object', schema)
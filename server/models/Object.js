const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    name: {type: String, required: true, unique: true},
    category: {type: Types.ObjectId, ref: 'CategoryObj'},
    type: {type: Types.ObjectId, ref: 'TypeObj'},
    adress: {type: String, required: true},
    working_time: {type: String, required: true},
    working_days: {type: String, required: true},
    description: {type: String, default: undefined},
    phone: {type: String, default: undefined},
    web: {type: String, default: undefined},
    clicks: {type: Number, default: 0},
    average_mark: {type: String, default: 0},
    tags: [{type: Number, required: true}],
    //tags: {type: Types.ObjectId, ref: 'TagObj'},
    comments: [{type: Types.ObjectId, ref: 'UserComment'}],
    picture: {type: String, default: undefined},
}, { collection: 'objects' })


module.exports = model('Object', schema)
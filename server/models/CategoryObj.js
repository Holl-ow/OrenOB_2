const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    name: {type: String, required: true, unique: true},
    id_types_cate: {type: Types.ObjectId, ref: 'TypeCategory'}
}, { collection: 'categories_object' })


module.exports = model('CategoryObj', schema)
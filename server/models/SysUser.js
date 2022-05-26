const {Schema, model, Types} = require('mongoose')

schema = new Schema({
    role: {type: String, required: true},
    user_id: {type: Types.ObjectId, ref: 'User'}
}, { collection: 'sys_users' })


module.exports = model('SysUser', schema)
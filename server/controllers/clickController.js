const Object = require('../models/Object')

class ClickController {
   
    async clicks(req, res) {
        const {_id} = req.body
        const object = await Object.findOne({ _id})
        if(object){
            object.clicks++
            await object.save()
        }
    }
}

module.exports = new ClickController()
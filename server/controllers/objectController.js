const Object = require('../models/Object')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class ObjectController {
    async create(req, res, next) {
        
        try {
            
            let {name, category, type, adress, working_time, break_time, working_days,
                description, phone, web, tags} = req.body
    
            const img = req.files.picture
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'img', fileName))
    
            const object = new Object({name, category, type, adress, working_time, break_time, working_days,
                description, phone, web, tags, picture: fileName});
            await object.save()

            return res.json(object)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    
    async getAll(req, res) {
        const {category, limit, page} = req.query
        let objects
        
        let cpage = page || 1
        let climit = limit || 9
        let offset = cpage * climit - climit
        let count

        if(!category){
            count = await Object.find({}).count()
            objects = await Object.find({}).limit(climit).skip(offset)
        }
        else{
            objects = await Object.find({category}).limit(climit).skip(offset)
        }
       
        return res.json({count: count, objects})
        
    }


    async getOne(req, res) {
        const {id} = req.params
        const object = await Object.findOne({id})

        return res.json(object)
    }

}

module.exports = new ObjectController()
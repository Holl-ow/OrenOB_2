const Object = require('../models/Object')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class ObjectController {
    async create(req, res, next) {

        try {

            let { name, category, type, adress, working_time, working_days,
                description, phone, web, tags } = req.body

            let img, fileName;

            if (req.files == null) {  
            }else{
                img = req.files.picture
                fileName = uuid.v4() + ".jpg"
                img.mv(path.resolve(__dirname, '..', 'img', fileName))
            }

            let arr = [];
            if (tags) {
                tags = JSON.parse(tags)

                for (let c in tags) {
                    arr.push(tags[c]);
                }
            }


            const object = new Object({
                name, category, type, adress, working_time, working_days,
                description, phone, web, tags: arr, picture: fileName
            });
            await object.save()

            return res.json(object)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getAll(req, res) {
        const { categ, limit, page } = req.query
        let objects

        let cpage = page || 1
        let climit = limit || 9
        let offset = cpage * climit - climit
        let count

        if (!categ) {
            count = await Object.find({}).count()
            objects = await Object.find({}).limit(climit).skip(offset)
        }
        else {
            count = await Object.find({category: categ}).count()
            objects = await Object.find({ category: categ }).limit(climit).skip(offset)
        }

        return res.json({ count: count, objects })

    }


    async getOne(req, res) {
        const { id } = req.params
        const object = await Object.findOne({ _id: id })

        return res.json(object)
    }


}

module.exports = new ObjectController()
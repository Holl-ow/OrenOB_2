const TypeObj = require('../models/TypeObj')
const ApiError = require('../error/ApiError');

class TypeObjController {
    async create(req, res) {
        
        const {name} = req.body
        const type = new TypeObj({name})
        await type.save()

        return res.json(type)
    }

    async getAll(req, res) {
        const types = await TypeObj.find({})
        return res.json(types)
    }

}

module.exports = new TypeObjController()
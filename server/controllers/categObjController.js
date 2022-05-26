const CategoryObj = require('../models/CategoryObj')

class CategoryObjController {
    async create(req, res) {
        
        const {name} = req.body
        const category = new CategoryObj({name})
        await category.save()

        return res.json(category)
    }

    async getAll(req, res) {
        const categories = await CategoryObj.find({})
        return res.json(categories)
    }

}

module.exports = new CategoryObjController()
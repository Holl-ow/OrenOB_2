const TagObj = require('../models/TagObj')

class TagObjController {
    async create(req, res) {
        
        const {name, count} = req.body
        const tag = new TagObj({name, count})
        await tag.save()

        return res.json(tag)
    }

    async getAll(req, res) {
        const tags = await TagObj.find({})
        return res.json(tags)
    }

}

module.exports = new TagObjController()
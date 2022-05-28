const Router = require('express')
const router = new Router()
const TagObjController = require('../controllers/tagController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), TagObjController.create)
router.get('/', TagObjController.getAll)

module.exports = router
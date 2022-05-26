const Router = require('express')
const router = new Router()
const TypeObjController = require('../controllers/typeObjController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), TypeObjController.create)
router.get('/', TypeObjController.getAll)

module.exports = router
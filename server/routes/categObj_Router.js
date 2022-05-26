const Router = require('express')
const router = new Router()
const categObjController = require('../controllers/categObjController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), categObjController.create)
router.get('/', categObjController.getAll)

module.exports = router
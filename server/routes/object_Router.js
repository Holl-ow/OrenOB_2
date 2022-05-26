const Router = require('express')
const router = new Router()
const objectController = require('../controllers/objectController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), objectController.create)
router.get('/', objectController.getAll)
router.get('/:id', objectController.getOne)

module.exports = router
const Router = require('express')
const router = new Router()
const object_Router = require('./object_Router')
const user_Router = require('./user_Router')
const typeObj_Router = require('./typeObj_Router')
const categObj_Router = require('./categObj_Router')

router.use('/object', object_Router)
router.use('/user', user_Router)
router.use('/type_obj', typeObj_Router)
router.use('/categ_obj', categObj_Router)


module.exports = router
const Router = require('express')
const router = new Router()
const clickController = require('../controllers/clickController')

router.post('/clicks', clickController.clicks)

module.exports = router
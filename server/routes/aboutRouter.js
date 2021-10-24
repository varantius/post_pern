const Router = require('express')
const router = new Router()
const AboutController = require('../controllers/AboutController')

router.get('/', AboutController.getInfo)

module.exports = router

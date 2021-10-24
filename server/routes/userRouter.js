const Router = require('express')
const router = new Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOne)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router
const Router = require('express')
const router = new Router()
const PostController = require('../controllers/PostController')

router.get('/', PostController.getAll)
router.get('/:id', PostController.getOne)
router.post('/', PostController.create)
router.put('/:id', PostController.update)
router.delete('/:id', PostController.delete)

module.exports = router
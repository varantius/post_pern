const Router = require('express')
const router = new Router()

const aboutRouter = require('./aboutRouter')
const postRouter = require('./postRouter')
const userRouter = require('./userRouter')

//Подроутеры
router.use('/about', aboutRouter)
router.use('/posts', postRouter)
router.use('/users', userRouter)

module.exports = router
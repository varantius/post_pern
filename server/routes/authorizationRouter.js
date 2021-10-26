const Router = require("express")
const router = new Router()

const {check} = require('express-validator')

const AuthController = require('../controllers/AuthController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', [
        check('name', "Cannot be empty").notEmpty(),
        check('email', "Email cannot be empty").isEmail(),
        check('password', "Password should memore than 4 symbols and less that 10 symbols").isLength({
            min: 4, max: 10
        }),
    ], AuthController.registration)
router.post('/login', [
    check('email', "Email cannot be empty").isEmail(),
    check('password', "Password should memore than 4 symbols and less that 10 symbols").isLength({
        min: 4, max: 10
    }),
], AuthController.login)

router.get('/', authMiddleware, AuthController.check)

module.exports = router

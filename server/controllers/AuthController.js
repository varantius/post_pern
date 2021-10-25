const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {sequelize} = require('../models')
const User = sequelize.models.users

const {validationResult} = require('express-validator')


const generateJwt = (id, name, email) =>{
    return jwt.sign(
        {id, name, email},
        "supertest",
        {expiresIn: "24h"}
    )
}

class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Registration error", errors})
            }

            const {name, email, password} = req.body

            if (!email || !password) {
                // console.log("Incorrect email or password")
                // next()
                return res.status(404).json({message: "Incorrect email or password"})
            }

            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                // console.log("User already exist")
                // next()
                return res.status(404).json({message: "User already exist"})
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({name, email, password: hashPassword})
            const token = generateJwt(user.id, name, email)

            return res.json({token})

        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Auth error", errors})
            }

            const {name, email, password } = req.body
            const user = await User.findOne({where:{email}})
            if(!user) {
                return res.status(404).json({message: "User does not found"})
            }

            let comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword){
                return res.status(404).json({message: "Password does not match"})
            }
            const token = generateJwt(user.id, name, email)
            return res.json({token})

        } catch (e) {
            console.log(e)
        }
    }

    async check(req, res, next){
        res.json({message: "ALL RIGHT"})
    }
}

module.exports = new AuthController()
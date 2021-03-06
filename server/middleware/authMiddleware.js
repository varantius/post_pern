const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){


    if (req.method === "OPTIONS"){
        next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }

        const decoded = jwt.verify(token, "supertest")
        req.user = decoded
        console.log("auth middleware")
        console.log(req.user)
        console.log("-----------------")
        next()
    }catch (e) {
        return res.status(401).json({message: "Unauthorized"})
    }
}
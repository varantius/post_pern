const pool = require('../database')
const {v4: uuidv4} = require('uuid');

const {sequelize} = require('../models')
const Users = sequelize.models.users
// const Student = sequelize.models.student

// console.log(Users)
// console.log(Student)
// module.exports.getAll = async function (req, res){
//     try {
//         const user = await Users.findAll()
//         return res.status(200).json(user)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// export const getAll = async (req, res) => {
//     try {
//         const user = await Users.findAll()
//         return res.status(200).json(user)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

class UserController {
    async getAll(req, res) {
        try {
            // const user = await pool.query("SELECT * FROM users", [])
            // return res.status(200).json(user.rows)

            const user = await Users.findAll()
            if(!user){
               return res.status(404).json({message: "No values?"})
            }
            return res.status(200).json(user)
        } catch (e) {
            console.log(e.message)
        }
    }

    async getOne(req, res) {
        try {
            // const {id} = req.params
            // const user = await pool.query("SELECT * FROM users WHERE user_id=$1", [id])
            // return res.status(200).json(user.rows)

            const {id} = req.params
            const user = await Users.findOne({where: {user_id: id}})
            if(!user){
                return res.status(404).json({message: "No values?"})
            }
            return res.status(200).json(user)
        } catch (e) {
            console.log(e.message)
        }
    }

    async create(req, res) {
        try {
            // const {name, email, password} = req.body
            // const user = await pool.query(
            //     "INSERT INTO users(user_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
            //     [uuidv4(), name, email, password])
            // return res.status(200).json(user.rows)

            const {name, email, password} = req.body
            const user = await Users.create({
                name,
                email,
                password
            })
            if(!user){
                return res.status(404).json({message: "No values?"})
            }
            return res.status(200).json(user)
        } catch (e) {
            console.log(e.message)
        }
    }

    async update(req, res) {
        try {
            // const {id} = req.params
            // const {name, email, password} = req.body
            // const user = await pool.query(
            //     "UPDATE users SET name=$1, email=$2, password=$3 WHERE user_id=$4 RETURNING *",
            //     [name, email, password, id]);
            // return res.status(200).json(user.rows)

            const {id} = req.params
            const {name, email, password} = req.body
            const user = await Users.update(req.body, {
                where: {user_id: id}
            })
            if(!user){
                return res.status(404).json({message: "No values?"})
            }
            return res.status(200).json(user)
        } catch (e) {
            console.log(e.message)
        }
    }

    async delete(req, res) {
        try {
            // const {id} = req.params
            // const user = await pool.query("DELETE FROM users WHERE user_id=$1", [id])
            // return res.status(200).json(user.rows)

            const {id} = req.params
            const user = await Users.destroy({
                where: {
                    user_id: id
                }
            })
            if(!user){
                return res.status(404).json({message: "No values?"})
            }
            return res.status(200).json(user)
        } catch (e) {
            console.log(e.message)
        }
    }
}

module.exports = new UserController
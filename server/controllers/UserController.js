const pool = require('../database')
const {v4: uuidv4} = require('uuid');

class UserController{
    async getAll(req, res){
        try{
            const user = await pool.query("SELECT * FROM users", [])
            return res.status(200).json(user.rows)
        }catch(e){
            console.log(e.message)
        }
    }
    async getOne(req, res){
        try{
            const {id} = req.params
            const user = await pool.query("SELECT * FROM users WHERE user_id=$1", [id])
            return res.status(200).json(user.rows)
        }catch(e){
            console.log(e.message)
        }
    }
    async create(req, res){
        try{
            const {name, email, password} = req.body
            const user = await pool.query(
                "INSERT INTO users(user_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
                [uuidv4(), name, email, password])
            return res.status(200).json(user.rows)
        }catch(e){
            console.log(e.message)
        }
    }
    async update(req, res){
        try{
            const {id} = req.params
            const {name, email, password} = req.body
            const user = await pool.query(
                "UPDATE users SET name=$1, email=$2, password=$3 WHERE user_id=$4 RETURNING *",
                [name, email, password, id]);
            return res.status(200).json(user.rows)
        }catch(e){
            console.log(e.message)
        }
    }
    async delete(req, res){
        try{
            const {id} = req.params
            const user = await pool.query("DELETE FROM users WHERE user_id=$1", [id])
            return res.status(200).json(user.rows)
        }catch(e){
            console.log(e.message)
        }
    }
}

module.exports = new UserController
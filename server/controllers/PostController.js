const pool = require('../database')
const {v4: uuidv4} = require('uuid');

class PostController{
    async getOne(req,res){
        try{
            const {id} = req.params
            const post = await pool.query("SELECT * FROM posts WHERE post_id=$1", [id])
            return res.status(200).json(post.rows)
        }catch(e){
            console.log(e.message)
        }

    }

    async getAll(req,res){
        try{
            const posts = await pool.query("SELECT * from posts")
            return res.status(200).json(posts.rows)
        }catch(e){
            console.log(e.message)
        }

    }

    async create(req, res){
        try{
            const {title, description, user_id} = req.body
            const post = await pool.query(
                "INSERT INTO posts(post_id, title, description, user_id) VALUES ($1, $2, $3, $4) RETURNING *", [ uuidv4(), title, description, user_id])
            console.log(post.rows)
            return res.status(200).json(post.rows)
        }catch(e){
            console.log(e.message)
        }

    }
    async update(req, res){
        try{
            const {id} = req.params
            const {title, description} = req.body
            const post = await pool.query("UPDATE posts SET title=$1, description=$2 WHERE post_id=$3 RETURNING *", [title, description, id])
            return res.status(200).json(post.rows)
        }catch(e){
            console.log(e.message)
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params
            const post =  await pool.query("DELETE FROM posts WHERE post_id=$1 RETURNING *", [id])
            return res.status(200).json(post.rows)
        }catch(e){
            console.log(e.message)
        }
    }

}

module.exports = new PostController

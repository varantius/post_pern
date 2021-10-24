const pool = require('../database')
const {v4: uuidv4} = require('uuid');

const {sequelize} = require('../models')
const Posts = sequelize.models.posts

class PostController {
    async getOne(req, res) {
        try {
            // const {id} = req.params
            // const post = await pool.query("SELECT * FROM posts WHERE post_id=$1", [id])
            // return res.status(200).json(post.rows)

            const {id} = req.params

            const post = await Posts.findOne({
                where: {
                    post_id: id
                }
            })
            if(!post){
                return res.status(404).json({message: "No values in post?"})
            }
            return res.status(200).json(post)
        } catch (e) {
            console.log(e.message)
        }

    }

    async getAll(req, res) {
        try {
            // const posts = await pool.query("SELECT * from posts")
            // return res.status(200).json(posts.rows)

            const post = await Posts.findAll()
            if(!post){
                return res.status(404).json({message: "No values in post?"})
            }
            return res.status(200).json(post)
        } catch (e) {
            console.log(e.message)
        }

    }

    async create(req, res) {
        try {
            // const {title, description, user_id} = req.body
            // const post = await pool.query(
            //     "INSERT INTO posts(post_id, title, description, user_id) VALUES ($1, $2, $3, $4) RETURNING *", [uuidv4(), title, description, user_id])
            // console.log(post.rows)
            // return res.status(200).json(post.rows)

            const {title, description} = req.body
            const post = await Posts.create({
                title, description
            })
            if(!post){
                return res.status(404).json({message: "No values in post?"})
            }
            return res.status(200).json(post)
        } catch (e) {
            console.log(e.message)
        }

    }

    async update(req, res) {
        try {
            // const {id} = req.params
            // const {title, description} = req.body
            // const post = await pool.query("UPDATE posts SET title=$1, description=$2 WHERE post_id=$3 RETURNING *", [title, description, id])
            // return res.status(200).json(post.rows)

            const {id} = req.params
            const {title, description} = req.body
            const post = await Posts.update({
                title, description
            }, {where: {
                    post_id: id
                }
            })
            if(!post){
                return res.status(404).json({message: "No values in post?"})
            }
            return res.status(200).json(post)
        } catch (e) {
            console.log(e.message)
        }
    }

    async delete(req, res) {
        try {
            // const {id} = req.params
            // const post = await pool.query("DELETE FROM posts WHERE post_id=$1 RETURNING *", [id])
            // return res.status(200).json(post.rows)

            const {id} = req.params
            const post = await Post.destroy({
                where: {
                    post_id: id
                }
            })
            if(!post){
                return res.status(404).json({message: "No values in post?"})
            }
            return res.status(200).json(post)
        } catch (e) {
            console.log(e.message)
        }
    }

}

module.exports = new PostController

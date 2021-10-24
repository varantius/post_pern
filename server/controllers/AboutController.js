const pool = require('../database')

class AboutController{
    async getInfo(req, res){
        const query = await pool.query("SELECT * FROM about", [])
        return res.json(query.rows)
    }
}

module.exports = new AboutController
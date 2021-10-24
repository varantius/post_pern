require('dotenv').config()

const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const {sequelize} = require('./models')
// const initModels = require("./models/init-models");

const app = express()

const PORT = process.env.PORT || 5432
// cors нужен для отправки запросов с браузера
app.use(cors())
//чтобы парсить json формат
app.use(express.json())

app.use('/', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, (req, res) => {
            console.log(`Server started on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

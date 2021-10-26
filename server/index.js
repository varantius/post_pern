require('dotenv').config()

const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authorizationRouter');
const router = require('./routes/index');

const {sequelize} = require('./models')
// const initModels = require("./models/init-models");

const authMiddleware = require('./middleware/authMiddleware')

const app = express()

const PORT = process.env.PORT || 5432
// cors нужен для отправки запросов с браузера
app.use(cors())
//чтобы парсить json формат
app.use(express.json())

app.use('/auth', authRouter)
app.use('/',  router)

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

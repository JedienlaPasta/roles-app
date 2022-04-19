import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import rolesRoutes from './routes/roles.js'
import userRoutes from './routes/user.js'

const app = express()
dotenv.config()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/roles', rolesRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Roles API')
})

const CONNECTION_URL = 'mongodb+srv://mongo:v5OZ83iTS4Q4ICCE@rolescluster.u7c3e.mongodb.net/rolesDB?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL || CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
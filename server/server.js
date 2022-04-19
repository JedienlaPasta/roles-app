import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import rolesRoutes from './routes/roles.js'

const app = express()
dotenv.config()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/roles', rolesRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Roles API')
})

// connection string =>
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
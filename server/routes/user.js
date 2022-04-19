import express from 'express'
// import { userAuth, getUser, register } from '../controllers/user.js'
import { userAuth } from '../controllers/user'

const router = express.Router()

// router.post('/', register)
router.post('/login', userAuth)
// router.get('/user', getUser)

module.exports = router
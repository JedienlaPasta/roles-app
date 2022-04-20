import express from 'express'
import { userAuth, getUser, register } from '../controllers/user.js'

const router = express.Router()

router.post('/', register)
router.post('/login', userAuth)
router.get('/user', getUser)

export default router
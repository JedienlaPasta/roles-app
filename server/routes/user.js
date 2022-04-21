import express from 'express'
import { userAuth, getUser, register } from '../controllers/user.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', register)
router.post('/login', userAuth)
router.get('/user', authenticateToken, getUser)

export default router
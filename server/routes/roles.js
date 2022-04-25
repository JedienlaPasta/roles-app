import express from 'express'
import { getRoles, createRol, updateRol, deleteRol, getRolesByRUT } from '../controllers/roles.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', authenticateToken, getRoles)
router.get('/rut', getRolesByRUT)
router.post('/', createRol)
router.patch('/:id', updateRol)
router.delete('/:id', deleteRol)

export default router
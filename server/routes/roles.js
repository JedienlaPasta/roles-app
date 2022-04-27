import express from 'express'
import { getRoles, createRol, updateRol, deleteRol, getRolesByRUT, getRolesByDIR } from '../controllers/roles.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/rol', authenticateToken, getRoles)
router.get('/rut', authenticateToken, getRolesByRUT)
router.get('/dir', authenticateToken, getRolesByDIR)
router.post('/', createRol)
router.patch('/:id', updateRol)
router.delete('/:id', deleteRol)

export default router
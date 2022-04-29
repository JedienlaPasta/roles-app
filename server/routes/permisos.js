import express from 'express'
import { getPermiso, getPermisoByRUT, getPermisosByDIR, createRol, updateRol ,deleteRol } from '../controllers/permisos.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/rol', getPermiso)
router.get('/rut', getPermisoByRUT)
router.get('/dir', getPermisosByDIR)
router.post('/add', createRol)
router.patch('/:id', updateRol)
router.delete('/:id', deleteRol)

export default router
import express from 'express'
import { getPermiso, getPermisoByRUT, getPermisosByDIR, createPermiso, updatePermiso ,deletePermiso } from '../controllers/permisos.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/rol', authenticateToken, getPermiso)
router.get('/rut', authenticateToken, getPermisoByRUT)
router.get('/dir', authenticateToken, getPermisosByDIR)
router.post('/create', authenticateToken, createPermiso)
router.patch('/update', authenticateToken, updatePermiso)
router.delete('/delete', authenticateToken, deletePermiso)

export default router
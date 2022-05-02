import express from 'express'
import { getPermiso, getPermisoByRUT, getPermisosByDIR, createPermiso, updatePermiso ,deletePermiso } from '../controllers/permisos.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/rol', getPermiso)
router.get('/rut', getPermisoByRUT)
router.get('/dir', getPermisosByDIR)
router.post('/create', createPermiso)
router.patch('/update', updatePermiso)
router.delete('/delete', deletePermiso)

export default router
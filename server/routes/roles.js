import express from 'express'
import { getRoles, createRol, updateRol, deleteRol } from '../controllers/roles.js'

const router = express.Router()

router.get('/', getRoles)
router.post('/', createRol)
router.patch('/:id', updateRol)
router.delete('/:id', deleteRol)

export default router
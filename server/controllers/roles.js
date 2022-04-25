import RolData from "../models/rolesData.js";

export const getRoles = async (req, res) => {
    const roles = req.query
    console.log(roles) //==================================
    try {
        const rolesData = await RolData.find({ ROL_AVALUO_1: roles.rol1, ROL_AVALUO_2: roles.rol2 })
        res.status(200).json(rolesData)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getRolesByRUT = async (req, res) => {
    const rut = req.query.rut
    try {
        const rol = await RolData.find({ RUT: rut }) // maybe set a max amount
        res.status(200).json(rol)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createRol = async (req, res) => {
    res.status(200).json({ message: 'post rol' })
}
// export const getRolById = async (req, res) => {
//     const rol = await RolData.findById(req.params.id)
//     if (rol) {
//         res.status(200).json({rol, op: 'success'})
//     }
// }

export const updateRol = async (req, res) => {
    const rol = await RolData.findById(req.params.id)
    // res.status(200).json({ message: 'rol updated' })
    if (rol) {
        res.status(200).json({ rol, message: 'rol updated' })
    }
}

export const deleteRol = async (req, res) => {
    const rol = await RolData.findById(req.params.id)
    // res.status(200).json({ message: 'rol deleted' })
    if (rol) {
        res.status(200).json({ rol, message: 'rol deleted' })
    }
}
import RolData from "../models/rolesData.js";

export const getRoles = async (req, res) => {
    const roles = req.query
    console.log(roles)
    try {
        const rolesData = await RolData.find({ ROL_AVALUO_1: roles.rol1, ROL_AVALUO_2: roles.rol2 })
        res.status(200).json(rolesData)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createRol = async (req, res) => {
    res.status(200).json({ message: 'post rol' })
}

export const updateRol = async (req, res) => {
    res.status(200).json({ message: 'update rol' })
}

export const deleteRol = async (req, res) => {
    res.status(200).json({ message: 'delete rol' })
}

// actualizar reglamento de la pagina de transparencia
// oficina de social
// que no se ensucien
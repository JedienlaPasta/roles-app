import Permiso from "../models/permisosModel.js"

export const getPermiso = async (req, res) => {
    const permiso = req.query
    console.log(req.query)
    try {
        const permisoData = await Permiso.find({ permiso: permiso })
        res.status(200).json(permisoData)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getPermisoByRUT = async (req, res) => {
    const rut = req.query.rut
    try {
        const permiso = await Permiso.find({ RUT: rut })
        res.status(200).json(permiso)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getPermisosByDIR = async (req, res) => {
    const dir = req.query.dir
    try {
        const permiso = await Permiso.find({ CALLE: {$regex: dir, $options: 'i'} }).limit(5)
        res.status(200).json(permiso)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createRol = async (req, res) => {

}

export const updateRol = async (req, res) => {

}

export const deleteRol = async (req, res) => {

}

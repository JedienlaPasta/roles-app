import Permiso from "../models/permisosModel.js"

export const getPermiso = async (req, res) => {
    const permiso = req.query
    console.log(req.query)
    try {
        const permisoData = await Permiso.find({ MATRIZ: permiso.matriz, DIGITO: permiso.digito })
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

export const createPermiso = async (req, res) => {
    const rol = req.body
    try {
        const permiso = rol
        // insert into DB
        console.log(permiso)
        res.status(200)
    } catch (error) {
        res.status(401).json({ message: error.message }) // 401?
    }
    res.status(200)
}

export const updatePermiso = async (req, res) => {
    const permiso = req.body
    try {
        const newPermiso = permiso
        console.log(permiso)
        res.status(200)
    } catch (error) {
        res.status(401).json({ message: error.message }) // 401?
    }
}

export const deletePermiso = async (req, res) => {
    const rol = req.query
    console.log(rol)
    try {
        
    } catch (error) {
        
    }
}

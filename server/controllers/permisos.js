import Permiso from "../models/permisosModel.js"

export const getPermiso = async (req, res) => {
    const permiso = req.query
    console.log(req.query)
    try {
        const permisoData = await Permiso.find({ MATRIZ: permiso.matriz, DIGITO: permiso.digito })
        res.status(200).json(permisoData)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el permiso' })
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
    const dir = req.query.dir || 'empty'
    console.log(dir)
    try {
        const permiso = await Permiso.find({ CALLE: {$regex: dir, $options: 'i'} }).limit(5)
        res.status(200).json(permiso)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el permiso' })
    }
}

export const createPermiso = async (req, res) => {
    // se checkea primero que el permiso no exista
    const permiso = await Permiso.findOne({ MATRIZ: req.body.permiso.MATRIZ, DIGITO: req.body.permiso.DIGITO })
    if (permiso) {
        console.log('este permiso ya existe')
        return res.status(401).json({ message: 'este permiso ya existe'})
    }
    // si no existe, se intenta ingresar en la DB
    const toInsert = new Permiso(req.body.permiso)
    console.log(req.body.permiso)
    try {
        await toInsert.save()
        res.status(200).json({ message: 'permiso ingresado exitosamente'})
    } catch (error) {
        res.status(401).json({ message: 'no se pudo ingresar el permiso' }) // 401?
    }
}

export const updatePermiso = async (req, res) => {
    const permiso = req.body.permiso
    if (!permiso) {
        console.log('este permiso no existe')
        return res.status(400).json({ message: 'este permiso no existe' })
    }
    const toUpdate = new Permiso(permiso)
    console.log(req.body.permiso)
    try {
        await toUpdate.save() // not save, but update() or its equivalent
        res.status(200).json({ message: 'permiso actualizado exitosamente' })
    } catch (error) {
        res.status(401).json({ message: 'no se pudo actualizar el permiso' }) // 401?
    }
}

export const deletePermiso = async (req, res) => {
    const rol = req.query
    console.log(rol)
    try {
        
    } catch (error) {
        
    }
}

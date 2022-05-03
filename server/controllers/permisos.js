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
        return res.status(401).json({ message: 'Este permiso ya existe'})
    }
    // si no existe, se intenta ingresar en la DB
    const toInsert = new Permiso(req.body.permiso)
    console.log(req.body.permiso)
    try {
        await toInsert.save()
        res.status(200).json({ message: 'Permiso ingresado exitosamente'})
    } catch (error) {
        res.status(401).json({ message: 'No se pudo ingresar el permiso' }) // 401?
    }
}

export const updatePermiso = async (req, res) => {
    const permiso = req.body.permiso
    const toUpdate = await Permiso.findOne({ MATRIZ: permiso.MATRIZ, DIGITO: permiso.DIGITO })
    if (!toUpdate) {
        console.log('este permiso no existe')
        return res.status(400).json({ message: 'Este permiso no existe' })
    }
    // console.log('==================')
    // console.log(toUpdate)
    // se cambian los valores del documento guardado en la DB por los nuevos valores enviados en el body
    Object.keys(toUpdate.toJSON()).forEach((key) => permiso[key] && (toUpdate[key] = permiso[key]))
    // console.log(toUpdate)
    
    try {
        toUpdate.save()
        console.log('permiso actualizado exitosamente')
        res.status(200).json({ message: 'Permiso actualizado exitosamente' })
    } catch (error) {
        console.log('no se pudo actualizar el permiso')
        res.status(401).json({ message: 'No se pudo actualizar el permiso' }) // 401?
    }
}

export const deletePermiso = async (req, res) => {
    const rol = req.query
    console.log(rol)
    try {
        
    } catch (error) {
        
    }
}
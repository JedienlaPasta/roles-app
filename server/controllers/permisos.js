import Permiso from "../models/permisosModel.js"

export const getPermiso = async (req, res) => {
    const permiso = req.query
    console.log(req.query)
    try {
        const permisoData = await Permiso.find({ MATRIZ: permiso?.matriz, DIGITO: permiso?.digito })
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
    const quantity = req.query.quantity || 1
    console.log(req.query)
    try {
        const permiso = await Permiso.find({ CALLE: {$regex: dir, $options: 'i'} }).limit(quantity)
        res.status(200).json(permiso)
    } catch (error) {
        res.status(404).json({ message: 'No se encontro el permiso' })
    }
}

export const createPermiso = async (req, res) => {
    // se checkea primero que el permiso no exista
    const permiso = await Permiso.findOne({ MATRIZ: req.body.permiso?.MATRIZ, DIGITO: req.body.permiso?.DIGITO })
    if (permiso) {
        console.log('este permiso ya existe')
        return res.status(403).json({ message: 'Este permiso ya existe'}) // 403?
    }
    // si no existe, se intenta ingresar en la DB
    const toInsert = new Permiso(req.body.permiso)
    try {
        await toInsert.save()
        res.status(201).json({ message: 'Permiso ingresado exitosamente'})
    } catch (error) {
        res.status(400).json({ message: 'No se pudo ingresar el permiso' })
    }
}

export const updatePermiso = async (req, res) => {
    const permiso = req.body.permiso
    const toUpdate = await Permiso.findOne({ _id: permiso?._id })
    if (!toUpdate) {
        console.log('este permiso no existe')
        return res.status(404).json({ message: 'Este permiso no existe' })
    }
    // se cambian los valores del documento guardado en la DB por los nuevos valores enviados en el body
    Object.keys(toUpdate.toJSON()).forEach((key) => permiso[key] && (toUpdate[key] = permiso[key]))
    
    try {
        await toUpdate.save()
        console.log('permiso actualizado exitosamente')
        res.status(200).json({ message: 'Permiso actualizado exitosamente' })
    } catch (error) {
        console.log('no se pudo actualizar el permiso')
        res.status(400).json({ message: 'No se pudo actualizar el permiso' }) // 400?
    }
}

export const deletePermiso = async (req, res) => {
    const id = req.query.id
    const toDelete = await Permiso.findOne({ _id: id })
    if (!toDelete) {
        console.log('este permiso no existe')
        return res.status(404).json({ message: 'Este permiso no existe' })
    }
    try {
        await Permiso.deleteOne({ _id: toDelete._id })
        console.log('permiso eliminado exitosamente')
        res.status(200).json({ message: 'Permiso eliminado exitosamente' })
    } catch (error) {
        console.log('no se pudo eliminar el permiso')
        res.status(400).json({ message: 'No se pudo eliminar el permiso' })
    }
}

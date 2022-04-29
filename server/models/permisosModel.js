import mongoose from "mongoose";

const permisoSchema = mongoose.Schema({
    MATRIZ: Number,
    DIGITO: Number,
    NOMBRE: Number,
    APELLIDO_P: String,
    APELLIDO_M: Number,
    MZ: String,
    NSTPC: String,
    CALLE: Number,
    SECTOR: Number,
    N_VIV: String,
    M2_C_RECEP: Number,
    M2_C_PERM: Number,
    M2_S_PERM: Number,
    M2_TOTAL: Number,
    ESTADO: String,
})

const Permiso = mongoose.model('Permisos', permisoSchema)

export default Permiso
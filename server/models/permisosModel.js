import mongoose from "mongoose";

const permisoSchema = mongoose.Schema({
    MATRIZ: {
        type: Number,
        required: true
    },
    DIGITO: {
        type: Number,
        required: true
    },
    NOMBRE: {
        type: String,
        required: true
    },
    APELLIDO_P: {
        type: String,
        required: true
    },
    APELLIDO_M: {
        type: String,
        required: true
    },
    MZ: {
        type: String,
        required: false
    },
    NSTPC: {
        type: String,
        required: true
    },
    CALLE: {
        type: String,
        required: true
    },
    SECTOR: {
        type: String,
        required: true
    },
    N_VIV: {
        type: Number,
        required: true
    },
    M2_C_RECEP: {
        type: Number,
        required: true
    },
    M2_C_PERM: {
        type: Number,
        required: true
    },
    M2_S_PERM: {
        type: Number,
        required: true
    },
    M2_TOTAL: {
        type: Number,
        required: true
    },
    ESTADO: {
        type: String,
        required: true
    },
})

const Permiso = mongoose.model('Permisos', permisoSchema)

export default Permiso
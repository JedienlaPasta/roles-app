import { fetchPermisos, fetchPermisosByRUT, fetchPermisosByDIR, createPermiso, updatePermiso, deletePermiso } from "../api/api"
import { ACTIONS } from "../context/DataContext"

export const getPermisos = async (rol, dispatch) => {
    try {
        const { data } = await fetchPermisos(rol)
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getPermisosByRUT = async () => {

}

export const getPermisosByDIR = async (dir, dispatch) => {
    try {
        const { data } = await fetchPermisosByDIR(dir)
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const postPermiso = async (permiso) => {
    try {
        await createPermiso(permiso)
    } catch (error) {
        console.log(error.message)
    }
}
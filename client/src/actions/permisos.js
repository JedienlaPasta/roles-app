import { fetchPermisos, fetchPermisosByRUT, fetchPermisosByDIR, createPermiso, updatePermiso, deletePermiso } from "../api/api"
import { ACTIONS } from "../context/DataContext"

export const getPermisos = async (rol, dispatch) => {
    try {
        const { data } = await fetchPermisos(rol)
        console.log(data)
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getPermisosByRUT = async () => {

}

export const getPermisosByDIR = async (dir, dispatch, setMessage) => {
    try {
        const { data } = await fetchPermisosByDIR(dir)
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        if (error.response) {
            const err = error.response.data.message + ', failed with status code: '+ error.response.status
            console.log(err)
            setMessage(error.response.data.message)
            // console.log(error.response.data)
            // console.log(error.response.status)
        }
    }
}

export const postPermiso = async (permiso) => {
    try {
        await createPermiso(permiso)
    } catch (error) {
        if (error.response) {
            // setMessage(error.response.data.message)
            console.log(error.response.data.message)
        }
    }
}

export const patchPermiso = async (permiso) => {
    try {
        await updatePermiso(permiso)
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
        }
    }
}
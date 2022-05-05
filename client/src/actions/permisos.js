import { fetchPermisos, fetchPermisosByRUT, fetchPermisosByDIR, createPermiso, updatePermiso, deletePermiso } from "../api/api"
import { ACTIONS } from "../context/DataContext"

export const getPermisos = async (rol, dispatch) => {
    try {
        const { data } = await fetchPermisos(rol)
        console.log(data)
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message)
        }
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
            setTimeout(() => setMessage(error.response.data.message), 500)
            console.log(error.response.data.message)
            // console.log(error.response.data)
            // console.log(error.response.status)
        }
    }
}

export const postPermiso = async (permiso, setMessage) => {
    try {
        const { data } = await createPermiso(permiso)
        setTimeout(()=>setMessage(data.message), 500)
    } catch (error) {
        if (error.response) {
            setTimeout(() => setMessage(error.response.data.message), 500)
            console.log(error.response.data.message)
        }
    }
}

export const patchPermiso = async (permiso, setMessage) => {
    try {
        const { data } = await updatePermiso(permiso)
        setTimeout(() => setMessage(data.message), 500)
    } catch (error) {
        if (error.response) {
            setTimeout(() => setMessage(error.response.data.message), 500)
            console.log(error.response.data.message)
        }
    }
}

export const delPermiso = async (rol, setMessage) => {
    try {
        const { data } = await deletePermiso(rol)
        setTimeout(() => setMessage(data.message), 500)
    } catch (error) {
        if (error.response) {
            setTimeout(() => setMessage(error.response.data.message), 500)
            console.log(error.response.data.message)
        }
    }
}
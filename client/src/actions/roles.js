import * as api from '../api/api'
import { ACTIONS } from '../context/DataContext'

export const getRoles = async (rol, dispatch) => {
    try {
        const { data } = await api.fetchRoles(rol)
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
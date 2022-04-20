import { fetchUser } from "../api/api";

export const authUser = async () => {
    try {
        
        const { data } = await fetchUser()
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
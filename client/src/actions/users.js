import { clearUser, isUserAuth, userAuth } from "../api/api";

export const login = async (user) => {
    try {
        const { data } = await userAuth(user)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const logout = async () => {
    try {
        await clearUser()
        console.log("cookie cleared")
    } catch (error) {
        console.log("couldn't clear cookie")
    }
    return { isAuthenticated: false, user: { name: '', role: '' }}
}

export const isAuthenticated = async () => {
    try {
        const { data } = await isUserAuth()
        return data
    } catch (error) {
        return { isAuthenticated: false, user: { name: '', role:'' }}
    }
}
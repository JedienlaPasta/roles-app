import React, { createContext, useEffect, useReducer, useState } from "react";
import { AuthService } from "../services/AuthService";

export const ACTIONS = {
    FETCH_MATCHES: 'fetch_matches'
}

const reducer = (roles, action) => {
    switch(action.type) {
        case ACTIONS.FETCH_MATCHES:
            return action.payload
        default:
            return roles
    }
}

const initialState = []

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [roles, dispatch] = useReducer(reducer, initialState)
    const [user, setUser] = useState({name: '', password: ''})
    const [isAuth, setIsAuth] = useState(false) // 'is the user authenticated?'
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user)
            setIsAuth(data.isAuthenticated)
            setIsLoaded(true)
        })
    }, [])

    return (
        <div>
            {
                !isLoaded ? <h1>Loading...</h1> :
                <DataContext.Provider value={{ roles, dispatch, user, setUser, isAuth, setIsAuth }}>
                    { children }
                </DataContext.Provider>
            }
        </div>
    )
}
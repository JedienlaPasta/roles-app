import React, { createContext, useReducer, useState } from "react";

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

    return (
        <DataContext.Provider value={{ roles, dispatch, user, setUser }}>
            { children }
        </DataContext.Provider>
    )
}
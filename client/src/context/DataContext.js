import React, { createContext, useReducer } from "react";

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

    return (
        <DataContext.Provider value={{ roles, dispatch }}>
            { children }
        </DataContext.Provider>
    )
}
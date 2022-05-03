import React, { createContext, useEffect, useReducer, useState } from "react";
import { isAuthenticated } from "../actions/users";

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
    const [user, setUser] = useState({name: '', role: ''})
    const [isAuth, setIsAuth] = useState(false) // 'is the user authenticated?'
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState('')
    const [page, setPage] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [newPermiso, setNewPermiso] = useState({ MATRIZ: '', DIGITO: '', NOMBRE: '', APELLIDO_P: '', APELLIDO_M: '', MZ: '', NSTPC: '', CALLE: '', SECTOR: '', N_VIV: '', M2_C_RECEP: '', M2_C_PERM: '', M2_S_PERM: '', M2_TOTAL: '', ESTADO: '' })

    useEffect(() => {
        isAuthenticated().then(data => {
            setUser(data.user)
            setIsAuth(data.isAuthenticated)
            setIsLoaded(true)
        })
    }, [])

    useEffect(() => {
        console.log('Is the user authenticated?: '+isAuth)
        console.log(user)
    }, [isAuth, user])

    useEffect(() => {
        // se asignan los valores en roles a newPermiso, cada vez que estos se cambian
        Object.keys(newPermiso).forEach(key => newPermiso[key] = roles[0]?.[key] || '')
    }, [roles])

    useEffect(() => {
        if (message !== '') {
            setShowPopup(true)
        }
    }, [message])

    return (
        <div>
            {
                !isLoaded ? <h1>Loading...</h1> :
                <DataContext.Provider value={{ roles, dispatch, user, setUser, isAuth, setIsAuth, page, setPage, message, setMessage, newPermiso, setNewPermiso,showPopup, setShowPopup }}>
                    { children }
                </DataContext.Provider>
            }
        </div>
    )
}
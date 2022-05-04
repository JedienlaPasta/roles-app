import React, { useContext, useState } from 'react'
import { getPermisos } from '../../../actions/permisos'
import { isAuthenticated } from '../../../actions/users'
import { DataContext } from '../../../context/DataContext'

export default function FormRol({ crudFilter, setCrudFilter}) {
    const [rol, setRol] = useState({ 
        matriz: '', 
        digito: '' 
    })

    const { dispatch, setUser, setIsAuth } = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        isAuthenticated().then(data => {
            const { isAuthenticated, user } = data
            setUser(user)
            setIsAuth(isAuthenticated)
            if (isAuthenticated) {
                setCrudFilter({...crudFilter, type: 'read'})
                getPermisos(rol, dispatch)
            }
        })
    }

    return (
        <form className='form-consulta' onSubmit={handleSubmit}>
            <span className='inputs'>
            <input type='number' name='rol_1' required placeholder='Ingresar MZ...' value={rol.matriz} onChange={(e) => setRol(item => ({...item, matriz: e.target.value}))} />
            <input type='number' name='rol_2' required placeholder='Ingresar PD...' value={rol.digito} onChange={(e) => setRol(item => ({...item, digito: e.target.value}))} />
            </span>
            <br />
            <button type='submit'>Buscar</button>
        </form>
    )
}

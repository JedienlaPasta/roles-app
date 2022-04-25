import React, { useContext, useState } from 'react'
import { getRoles } from '../../../actions/roles'
import { isAuthenticated } from '../../../actions/users'
import { DataContext } from '../../../context/DataContext'

export default function FormRut() {
    const [rut, setRut] = useState('')

    const { dispatch, setUser, setIsAuth } = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        isAuthenticated().then(data => {
            const { isAuthenticated, user } = data
            setUser(user)
            setIsAuth(isAuthenticated)
            if (isAuthenticated) {
                // getRoles(rol, dispatch) // change this one
            }
        })
    }

    return (
        <form className='form-consulta' onSubmit={handleSubmit}>

            <span className='inputs'>
            <input type='number' name='rut' required placeholder='Ingresar RUT...' value={rut} onChange={(e) => setRut(e.target.value)} />
            </span>
            <br />
            <button type='submit'>Buscar</button>
        </form>
    )
}

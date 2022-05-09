import React, { useContext, useState } from 'react'
import { getPermisosByDIR } from '../../../actions/permisos'
import { isAuthenticated } from '../../../actions/users'
import { DataContext } from '../../../context/DataContext'

export default function FormRut({ crudFilter, setCrudFilter}) {
    const [dir, setDir] = useState('')
    const [quantity, setQuantity] = useState(5)

    const { dispatch, setUser, setIsAuth } = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        isAuthenticated().then(data => {
            const { isAuthenticated, user } = data
            setUser(user)
            setIsAuth(isAuthenticated)
            if (isAuthenticated) {
                setCrudFilter({...crudFilter, type: 'read'})
                getPermisosByDIR(dir, quantity, dispatch)
            }
        })
    }

    return (
        <form className='form-consulta' onSubmit={handleSubmit}>
            <span className='inputs grid-inputs'>
            <input type='text' name='dir' required placeholder='Ingresar Dirección...' value={dir} onChange={(e) => setDir(e.target.value)} />
            <input type='number' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </span>
            <br />
            <button type='submit'>Buscar</button>
        </form>
    )
}

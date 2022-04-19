import React, { useContext, useState } from 'react'
import { getRoles } from '../../../actions/roles'
import { DataContext } from '../../../context/DataContext'

export default function Form() {
    const [rol, setRol] = useState({ 
        rol1: '', 
        rol2: '' 
    })

    const { dispatch } = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        getRoles(rol, dispatch)
    }

    return (
        <form className='form-consulta' onSubmit={handleSubmit}>
            <span className='inputs'>
            <input type='number' name='rol_1' required placeholder='Ingresar MZ...' value={rol.rol1} onChange={(e) => setRol(item => ({...item, rol1: e.target.value}))} />
            <input type='number' name='rol_2' required placeholder='Ingresar PD...' value={rol.rol2} onChange={(e) => setRol(item => ({...item, rol2: e.target.value}))} />
            </span>
            <br />
            <button type='submit'>Buscar</button>
        </form>
    )
}

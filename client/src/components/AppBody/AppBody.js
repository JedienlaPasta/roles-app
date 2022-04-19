import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Form from './Form/Form'
import List from './List/List'

export default function AppBody() {

    const { roles } = useContext(DataContext)

    return (
        <div className='body-container'>
            <h2 className='titulo-consulta'>Consulta por Rol</h2>
            <Form />
            { roles && <List /> }
        </div>
    )
}

import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import Form from './Form/FormRol'
import List from './List/List'

export default function AppBody() {
    const { roles, isAuth } = useContext(DataContext)
    const history = useNavigate()
    console.log(isAuth)

    useEffect(() => {
        if (!isAuth) return history('/auth')
    }, [isAuth])

    return (
        <div className='body-container'>
            <h2 className='titulo-consulta'>Consulta por Rol</h2>
            <Form />
            { roles && <List /> }
        </div>
    )
}

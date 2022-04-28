import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import Filter from './Filter/Filter'
import FormRol from './Form/FormRol'
import FormRut from './Form/FormRut'
import FormDir from './Form/FormDir'
import List from './List/List'

export default function AppBody() {
    const [filter, setFilter] = useState('ROL')
    const filters = [['ROL', <FormRol key={'rol'}/>], ['RUT', <FormRut key={'rut'}/>], ['DIR', <FormDir key={'dir'}/>]]
    const { roles, isAuth, dispatch, setPage } = useContext(DataContext)
    const history = useNavigate()
    console.log(roles)
    
    // const displayRoles = roles.map(item => <List key={item._id} />)
    const displayFilters = filters.map(item => <Filter key={item} val={item[0]} filter={filter} setFilter={setFilter} />)

    useEffect(() => {
        if (!isAuth) return history('/auth')
    }, [isAuth])

    useEffect (() => {
        setPage(() => 'rolcobro')
    })

    return (
        <div className='body-container'>
            <ul className='filter-links'>
                {displayFilters}
            </ul>
            <h4 className='titulo-consulta'>Haga su consulta</h4>
            {
                filters.map(item => item[0] === filter ? item[1] : null)
            }
            { roles.length > 0 && <List /> }
        </div>
    )
}

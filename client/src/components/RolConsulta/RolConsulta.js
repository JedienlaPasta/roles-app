import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACTIONS, DataContext } from '../../context/DataContext'
import Filter from './Filter/Filter'
import FormRol from './Form/FormRol'
import FormRut from './Form/FormRut'
import FormDir from './Form/FormDir'
import List from './List/List'
import './style.css'

export default function AppBody() {
    const [crudFilter, setCrudFilter] = useState('Consultar')
    const [filter, setFilter] = useState('ROL')
    const crudFilters = ['Ingresar', 'Consultar']
    const filters = [['ROL', <FormRol key={'rol'}/>], ['RUT', <FormRut key={'rut'}/>], ['DIR', <FormDir key={'dir'}/>]]
    const { roles, user, isAuth, dispatch, setPage } = useContext(DataContext)
    const history = useNavigate()
    console.log(roles)
    
    const displayCrudFilters = crudFilters.map(item => <Filter key={item} val={item} filter={crudFilter} type='crud' setFilter={setCrudFilter} />)
    const displayFilters = filters.map(item => <Filter key={item} val={item[0]} filter={filter} type='filter' setFilter={setFilter} />)

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [] })
        if (!isAuth) return history('/auth')
    }, [isAuth, crudFilter, filter])

    useEffect (() => {
        setPage('rolconsulta')
    })

    const show = user.role === 'admin'
    console.log(show)

    return (
        <>
            {   show &&
                <div className="crud-filters">
                    <ul className='crud-filter-links'>
                        {displayCrudFilters}
                    </ul>
                </div>
            }
            <div className='body-container'>
                {   crudFilter === 'Consultar' ?
                    (<>
                        <ul className='filter-links'>
                            {displayFilters}
                        </ul>
                        <h4 className='titulo-consulta'>Haga su consulta</h4>
                        {
                            filters.map(item => item[0] === filter ? item[1] : null)
                        }
                        { roles.length > 0 && <List /> }
                    </>)
                    :
                    (<>
                        <List type='insert' /> 
                        {/* <List type='update' /> for updating fields */}
                    </>)
                }
            </div>
        </>
    )
}

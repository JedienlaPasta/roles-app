import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACTIONS, DataContext } from '../../context/DataContext'
import Filter from './Filter/Filter'
import FormRol from './Form/FormRol'
import FormRut from './Form/FormRut'
import FormDir from './Form/FormDir'
import List from './List/List'
import './style.css'
import Popup from './Popup'

export default function AppBody() {
    const [crudFilter, setCrudFilter] = useState({ crudType: 'Consultar', filter: 'ROL', type: 'read', filters: ['Ingresar', 'Consultar']})
    const [showPopup, setShowPopup] = useState(false)
    const filters = [['ROL', <FormRol key={'rol'}/>], ['RUT', <FormRut key={'rut'}/>], ['DIR', <FormDir key={'dir'}/>]]
    const { roles, user, isAuth, dispatch, setPage } = useContext(DataContext)
    const history = useNavigate()
    console.log(roles)

    // Ingresar - Consultar filter buttons
    const displayCrudFilters = crudFilter.filters.map(item => <Filter key={item} val={item} crudFilter={crudFilter} type='crud' setCrudFilter={setCrudFilter} />)
    // ROL - RUT - DIR filter buttons
    const displayFilters = filters.map(item => <Filter key={item} val={item[0]} crudFilter={crudFilter} type='filter' setCrudFilter={setCrudFilter} />)

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [] })
        if (!isAuth) return history('/auth')
    }, [isAuth, crudFilter.crudType])

    useEffect (() => {
        setPage('rolconsulta')
    })

    return (
        <>
            { showPopup && <Popup setShowPopup={setShowPopup} /> }
            {   user.role === 'admin' &&
                <div className="crud-filters">
                    <ul className='crud-filter-links'>
                        {displayCrudFilters}
                    </ul>
                </div>
            }
            <div className='body-container'>
                {   crudFilter.crudType === 'Consultar' ?
                    (<>
                        <ul className='filter-links'>
                            {displayFilters}
                        </ul>
                        <h4 className='titulo-consulta'>Haga su consulta</h4>
                        {   // aqui se define que formulario de renderiza, dependiendo de la opcion elegida: ['ROL', 'RUT', 'DIR']
                            filters.map(item => item[0] === crudFilter.filter ? item[1] : null)
                        }
                        { roles.length > 0 && <List crudFilter={crudFilter} setCrudFilter={setCrudFilter} setShowPopup={setShowPopup} /> }
                    </>)
                    :
                    (<>
                        <List crudFilter={crudFilter} setCrudFilter={setCrudFilter} setShowPopup={setShowPopup} />
                    </>)
                }
            </div>
            <button onClick={() => setShowPopup(prev => !prev)}>popup</button>
        </>
    )
}
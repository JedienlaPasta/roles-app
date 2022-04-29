import React, { useContext, useState } from 'react'
import { ACTIONS, DataContext } from '../../../context/DataContext'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import InsertItem from './InsertItem'
import Item from './Item'

export default function List({ crudFilter, setCrudFilter }) {
    const [rolIndex, setRolIndex] = useState(0)
    const { roles, user, dispatch } = useContext(DataContext)
    const totRoles = roles.length
    const type = crudFilter.type

    let displayItems
    if (type === 'insert') { displayItems = <InsertItem type={type} /> }
    else if (type === 'update') { displayItems = roles.map((rol) => <InsertItem type={type} data={rol} />) }
    else {
        displayItems = roles.map((rol, index) => ( index === rolIndex ?
            <Item key={rol._id} {...rol} index={index} tot={totRoles} /> : null
        ))
    }

    const goForward = () => {
        setRolIndex(prev => {
            if (prev === 4) return 0
            return prev + 1
        })
    }

    const goBackwards = () => {
        setRolIndex(prev => {
            if (prev === 0) return 4
            return prev - 1
        })
    }

    const deleteRol = () => {

    }

    const editRol = () => {
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [roles[rolIndex]] })
        if (crudFilter) {
            setCrudFilter({...crudFilter, type: 'update'})
        }
    }
    if (crudFilter) {console.log(crudFilter.type)}

    return (
        <>
            {   user.role === 'admin' && type !== 'insert' && type !== 'update' &&
                <div>
                    <p className='warning'>Cuidado, usted tiene permisos para editar y eliminar registros</p>
                    <div className="crud-btns-container">
                        <button className='crud-btn delete'>Eliminar</button>
                        <button className='crud-btn edit' onClick={editRol}>Editar</button>
                    </div>
                </div>
            }
            <div className="list-items">
                { crudFilter.filter === 'DIR' && totRoles > 1 && 
                    <div className="list-items-btns">
                        <h4 className='titulo-resultado'>Resultado #{rolIndex + 1}</h4>
                        <button className="list-btn btn-left" onClick={goBackwards}><FiChevronsLeft/></button>
                        <button className="list-btn btn-right" onClick={goForward}><FiChevronsRight/></button>
                    </div>
                }
                {displayItems}
            </div>
            {
                type === 'insert' &&
                <div className="crud-btns-container">
                    <button className='crud-btn save'>Guardar</button>
                    <button className='crud-btn cancel'>Cancelar</button>
                </div>
            }
            {
                type === 'update' &&
                <div className="crud-btns-container">
                    <button className='crud-btn save'>Guardar</button>
                    <button className='crud-btn cancel'>Cancelar</button>
                </div>
            }
        </>
    )
}
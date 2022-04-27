import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import InsertItem from './InsertItem'
import Item from './Item'

export default function List({ type }) {

    const { roles, user } = useContext(DataContext)
    const totRoles = roles.length

    const displayItems = type === 'insert' ? <InsertItem /> : roles.map((rol, index) => <Item key={rol._id} {...rol} index={index} tot={totRoles} />)
    console.log(type)
    return (
        <>
            {   user.role === 'admin' && type !== 'insert' &&
                <div>
                    <p className='warning'>Cuidado, usted tiene permisos para editar y eliminar registros</p>
                    <div className="crud-btns-container">
                        <button className='crud-btn delete'>Eliminar</button>
                        <button className='crud-btn edit'>Editar</button>
                    </div>
                </div>
            }
            {displayItems}
        </>
    )
}
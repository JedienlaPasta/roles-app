import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import InsertItem from './InsertItem'
import Item from './Item'

export default function List({ type }) {
    const [rolIndex, setRolIndex] = useContext(0)
    const { roles, user } = useContext(DataContext)
    const totRoles = roles.length

    const displayItems = type === 'insert' ? <InsertItem /> : roles.map((rol, index) => <Item key={rol._id} {...rol} index={index} tot={totRoles} />)
                                                            // show rol according to index state
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
            <div className="list-items">
                <div className="list-items-btns">
                    <button className="list-btn btn-left"><FiChevronsLeft/></button>
                    <button className="list-btn btn-right"><FiChevronsRight/></button>
                </div>
                {displayItems}
            </div>
        </>
    )
}
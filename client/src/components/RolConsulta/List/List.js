import React, { useContext, useState } from 'react'
import { DataContext } from '../../../context/DataContext'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import InsertItem from './InsertItem'
import Item from './Item'

export default function List({ type, filter }) {
    const [rolIndex, setRolIndex] = useState(0)
    const { roles, user } = useContext(DataContext)
    const totRoles = roles.length

    const displayItems = type === 'insert' ? <InsertItem /> : roles.map((rol, index) => (
        index === rolIndex ?
        <Item key={rol._id} {...rol} index={index} tot={totRoles} /> :
        null
    ))

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
                {   filter === 'DIR' &&
                    <div className="list-items-btns">
                        <button className="list-btn btn-left" onClick={goBackwards}><FiChevronsLeft/></button>
                        <button className="list-btn btn-right" onClick={goForward}><FiChevronsRight/></button>
                    </div>
                }
                { filter === 'DIR' && totRoles > 1 && 
                    <div className="list-items-btns">
                        <h4 className='titulo-resultado'>Resultado #{rolIndex + 1}</h4>
                        <button className="list-btn btn-left" onClick={goBackwards}><FiChevronsLeft/></button>
                        <button className="list-btn btn-right" onClick={goForward}><FiChevronsRight/></button>
                    </div>
                }
                {displayItems}
            </div>
        </>
    )
}
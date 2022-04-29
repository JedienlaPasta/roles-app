import React, { useContext, useState } from 'react'
import { DataContext } from '../../../context/DataContext'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import Item from './Item'

export default function List({ filter }) {
    const [rolIndex, setRolIndex] = useState(0)

    const { roles } = useContext(DataContext)
    const totRoles = roles.length

    const displayItems = roles.map((rol, index) => ( index === rolIndex ?
        <Item key={rol._id} {...rol} index={index} tot={totRoles} /> : null
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
            { filter === 'DIR' && totRoles > 1 && 
                <div className="list-items-btns">
                    <h4 className='titulo-resultado'>Resultado #{rolIndex + 1}</h4>
                    <button className="list-btn btn-left" onClick={goBackwards}><FiChevronsLeft/></button>
                    <button className="list-btn btn-right" onClick={goForward}><FiChevronsRight/></button>
                </div>
            }
            {displayItems}
        </>
    )
}

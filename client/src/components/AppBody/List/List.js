import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import Item from './Item'

export default function List() {

    const { roles } = useContext(DataContext)
    const totRoles = roles.length

    const displayItems = roles.map((rol, index) => <Item key={rol._id} {...rol} index={index} tot={totRoles} />)

    return (
        <>
            {displayItems}
        </>
    )
}

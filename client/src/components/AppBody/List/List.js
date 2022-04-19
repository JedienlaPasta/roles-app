import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import Item from './Item'

export default function List() {

    const { roles } = useContext(DataContext)

    const displayItems = roles.map(rol => <Item key={rol._id} {...rol} />)

    return (
        <table className='list-container'>
            <tbody>
                {displayItems}
            </tbody>
        </table>
    )
}

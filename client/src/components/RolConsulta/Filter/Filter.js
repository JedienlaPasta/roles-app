import React, { useContext } from "react";
import { ACTIONS, DataContext } from "../../../context/DataContext";

export default function Filter({val, filter, setFilter, type}) {
    const { dispatch } = useContext(DataContext)
    const base = type === 'crud' ? 'crud-filter-link' : 'filter-link'
    const name = filter === val ? `${base} marked` : `${base}`

    const handleClick = () => {
        dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [] })
        setFilter(val)
    }
    
    return (
        <li className={name} onClick={handleClick}>{val}</li>
    )
}
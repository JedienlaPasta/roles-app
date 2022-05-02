import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/users'
import { ACTIONS, DataContext } from '../../context/DataContext'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export default function Navbar() {
    const { setUser, setIsAuth, dispatch, page } = useContext(DataContext)

    const handleLogout = () => {
        logout().then(data => {
            setUser(data.user)
            setIsAuth(data.isAuthenticated)
            dispatch({ type: ACTIONS.FETCH_MATCHES, payload: [] })
        })
    }

    return (
        <header className='nav-header'>
            { page === 'rolcobro' ? <h2>ROL COBRO</h2> : <h2>PERMISOS DOM</h2> }
            <nav className='nav'>
                <ul className='nav-links'>
                    <li className='link'>
                        <Link className='link-item' to='/'>ROL_COBRO</Link>
                    </li>
                    <li className='link'>
                        <Link className='link-item' to='/permisos'>PERMISOS</Link>
                    </li>
                    <li className='link'>
                        <Link className='link-item logout' to='/auth' onClick={handleLogout}><RiLogoutBoxRLine/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
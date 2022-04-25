import React from 'react'
import { Routes, Link, Route, useParams } from 'react-router-dom'
import { logout } from '../../actions/users'

export default function Navbar() {

    return (
        <header className='nav-header'>
            <h2>ROL COBRO</h2>
            <nav className='nav'>
                <ul className='nav-links'>
                    <li className='link'>
                        <Link className='link-item' to='/'>home</Link>
                    </li>
                    <li className='link'>
                        {/* <Link className='link-item' to='/auth'>auth</Link> */}
                    </li>
                    <li className='link'>
                        <Link className='link-item' to='/auth' onClick={logout}>logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
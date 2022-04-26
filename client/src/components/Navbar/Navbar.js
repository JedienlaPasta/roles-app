import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/users'
import { DataContext } from '../../context/DataContext'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export default function Navbar() {
    const { setUser, setIsAuth } = useContext(DataContext)

    const handleLogout = () => {
        logout().then(data => {
            setUser(data.user)
            setIsAuth(data.isAuthenticated)
        })
    }

    return (
        <header className='nav-header'>
            <h2>ROL COBRO</h2>
            <nav className='nav'>
                <ul className='nav-links'>
                    <li className='link'>
                        <Link className='link-item' to='/rol2'>rol2</Link>
                    </li>
                    <li className='link'>
                        <Link className='link-item logout' to='/auth' onClick={handleLogout}><RiLogoutBoxRLine/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
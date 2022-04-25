import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAstronaut } from 'react-icons/fa'
import { DataContext } from '../../context/DataContext'
import { AuthService } from '../../services/AuthService'

export default function Auth() {
    const [user, setUser] = useState({name: '', password: ''})
    const [message, setMessage] = useState(null) // or maybe ''
    // const { user, setUser, isAuth } = useContext(DataContext)
    const Context = useContext(DataContext)

    const history = useNavigate()

    const login = (event) => {
        event.preventDefault()
        AuthService.login(user).then(data => {
            const { isAuthenticated, message } = data
            console.log(data)
            if (isAuthenticated) {
                Context.setUser(data.user)
                Context.setIsAuth(isAuthenticated)
                // history('/')
            }
            else {
                setMessage(message || 'null message')
            }
        })
    }

    return (
        <div className='login-container'>
            <div className="login-icon">
                <FaUserAstronaut />
            </div>
            <form className='login-form' onSubmit={login}>
                <h3 className='login-title'>Iniciar Sesión</h3>
                <div className="form-item">
                    <input type="text" id='user' placeholder=' ' className='login-input' autoComplete='off' required value={user.name} onChange={(e) => setUser(val => ({...val, name: e.target.value }))} />
                    <label htmlFor='user' className='login-label'>Usuario</label>
                </div>
                <div className="form-item">
                    <input type="password" id='pass' placeholder=' ' className='login-input' required value={user.password} onChange={(e) => setUser(val => ({...val, password: e.target.value }))} />
                    <label htmlFor='pass' className='login-label'>Contraseña</label>
                </div>
                <button className='login-button'>Iniciar Sesión</button>
            </form>
            {/* { message && <Message message={message} /> } */}
        </div>
    )
}

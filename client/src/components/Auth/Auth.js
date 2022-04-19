import React, { useState } from 'react'
import { FaUserAstronaut } from 'react-icons/fa'

export default function Auth() {
    const [user, setUser] = useState({username: '', password: ''})

    const login = (event) => {
        event.preventDefault()
    }

    return (
        <div className='login-container'>
            <div className="login-icon">
                <FaUserAstronaut />
            </div>
            <form className='login-form' onSubmit={login}>
                <h3 className='login-title'>Iniciar Sesión</h3>
                <div className="form-item">
                    <input type="text" id='user' placeholder=' ' className='login-input' autoComplete='off' required value={user.username} onChange={(e) => setUser(val => ({...val, username: e.target.value }))} />
                    <label for='user' className='login-label'>Usuario</label>
                </div>
                <div className="form-item">
                    <input type="password" id='pass' placeholder=' ' className='login-input' required value={user.password} onChange={(e) => setUser(val => ({...val, password: e.target.value }))} />
                    <label for='pass' className='login-label'>Contraseña</label>
                </div>
                <button className='login-button'>Iniciar Sesión</button>
            </form>
        </div>
    )
}

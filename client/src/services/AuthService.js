import axios from "axios"

export const AuthService = {

    login: async (user) => {
        return fetch('/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => data)
    },
    
    logout: async () => {
        return fetch('http://localhost:5000/users/logout')
                .then(res => res.json())
                .then(data => data)
    },

    isAuthenticated: async () => {
        return fetch('http://localhost:5000/users/auth')
                .then(res => {
                    if (res.status !== 401)
                        return res.json().then(data => data)
                    else
                        return { isAuthenticated: false, user: { name: '', role: '' }}
                })
    }
}
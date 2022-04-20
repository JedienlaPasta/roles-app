import axios from 'axios'

// Roles
const roles_url = 'http://localhost:5000/roles'
// const url = 'https://rol-cobro.herokuapp.com/roles'

export const fetchRoles = (rol) => axios.get(roles_url, { params: rol })

// Usuarios
const users_url = 'http://localhost:5000/users/login'

export const fetchUser = () => axios.post(users_url)
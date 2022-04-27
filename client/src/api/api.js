import axios from 'axios'

// Roles
// const roles_url = 'http://localhost:5000/roles'
// const url = 'https://rol-cobro.herokuapp.com/roles'

export const fetchRoles = (rol) => axios.get('http://localhost:5000/roles/rol', { params: rol }, { withCredentials: true })

export const fetchRolesByRUT = (rut) => axios.get('http://localhost:5000/roles/rut', { params: rut }, { withCredentials: true })

export const fetchRolesByDIR = (dir) => axios.get('http://localhost:5000/roles/dir', { params: dir }, { withCredentials: true })

// Usuarios
// const users_url = 'http://localhost:5000/users/'

export const userAuth = (user) => axios.post('http://localhost:5000/users/login', { user }, { withCredentials: true })

export const clearUser = () => axios.get('http://localhost:5000/users/logout', { withCredentials: true })

export const isUserAuth = () => axios.get('http://localhost:5000/users/auth', { withCredentials: true })
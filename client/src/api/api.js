import axios from 'axios'

// Roles
// const roles_url = 'http://localhost:5000/roles'
// const url = 'https://rol-cobro.herokuapp.com/roles'

export const fetchRoles = (rol) => axios.get('/roles/rol', { params: rol })

export const fetchRolesByRUT = (rut) => axios.get('/roles/rut', { params: rut })

export const fetchRolesByDIR = (dir) => axios.get('/roles/dir', { params: dir })

// Usuarios
// const users_url = 'http://localhost:5000/users/login'

export const userAuth = (user) => axios.post('/users/login', { user })

export const clearUser = () => axios.get('/users/logout')

export const isUserAuth = () => axios.get('/users/auth')
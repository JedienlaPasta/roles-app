import axios from 'axios'

// const url = 'http://localhost:5000/roles'
const url = 'https://rol-cobro.herokuapp.com/roles'

export const fetchRoles = (rol) => axios.get(url, { params: rol })
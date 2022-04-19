import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export const register = async (req, res) => {
    const { username, password } = req.body

    const userExists = await User.findOne({ username })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // //Create user
    // const user = await User.create({
    //     username,
    //     password: hashedPassword
    // })

    // video timestamp (21:46) // JWT Auth
}

export const userAuth = async (req, res) => {
    res.send('Auth')
}

export const getUser = async (req, res) => {
    res.send('User data')
}
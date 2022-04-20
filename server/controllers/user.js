import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export const register = async (req, res) => {
    const { name, password } = req.body

    const userExists = await User.findOne({ name })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        password: hashedPassword
    })

    res.status(201).json({message: 'user registered succesfuly!'})
}

export const userAuth = async (req, res) => {
    const { name, password } = req.body
    
    const user = await User.findOne({ name })
    try {
        if (user && (bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name
            })
        }
        res.status(400).json({ message: 'credenciales incorrectas' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    res.send('get user data')
}
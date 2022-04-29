import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export const register = async (req, res) => {
    const { name, password, role } = req.body

    const userExists = await User.findOne({ name })
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        password: hashedPassword,
        role
    })

    res.status(201).json({message: 'user registered succesfuly!'})
}

export const userAuth = async (req, res) => {
    const { name, password } = req.body.user
    console.log(req.body)

    const user = await User.findOne({ name })
    if (user == null) {
        return res.status(400).json({ message: 'user not found' })
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            const token = accessToken(user.id)
            res.cookie('token', token, { httpOnly: true, maxAge: 300000 })
            res.json({
                message: 'signed in successfully',
                isAuthenticated: true,
                user: { name: user.name, role: user.role }
            })
        }
        else res.status(401).json({ message: 'not authorized, invalid credentials' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    const id = req.id
    const user = await User.findOne({ id }).select('-password')
    res.json({ user })
}

export const clearUser = async (req, res) => {
    try {
        res.clearCookie('token')
    } catch (error) {
        res.json({ message: error })
    }
    res.json({ success: true })
}

export const isAuth = async (req, res) => {
    const { id } = req.id
    const user = await User.findOne({ _id: id })
    res.status(200).json({ isAuthenticated: true, user: { name: user.name, role: user.role }})
}

const accessToken = (id) => jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 300})
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export const register = async (req, res) => {
    const { name, password } = req.body

    const userExists = await User.findOne({ name })

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' })
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

    if (user == null) {
        return res.response(400).send('cannot find user')
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            res.json({
                id: user.id,
                name: user.name,
                token: accessToken(user.id)
            })
        }
        else {
            res.send('not allowed')
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const getUser = async (req, res) => {
    const id = req.id
    const user = await User.findOne({ id }).select('-password')
    res.json({ user })
}

const accessToken = (id) => jwt.sign(id, process.env.ACCESS_TOKEN_SECRET)
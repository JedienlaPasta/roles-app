import jwt from 'jsonwebtoken'

export const authenticateToken = async (req, res, next) => {
    // const authHeader = req.headers['authorization']
    // console.log(req.headers)
    // const token = authHeader && authHeader.split(' ')[1]
    const token = req.cookies.token
    if (token == null) return res.status(401).json({ message: 'not authorized, token not provided or expired' })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id) => {
        if (err) return res.status(401).json({ message: 'not authorized, invalid token' })
        req.id = id
        next()
    })
}
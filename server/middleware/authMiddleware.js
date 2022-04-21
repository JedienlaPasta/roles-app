import jwt from 'jsonwebtoken'

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).json({ message: 'not authorized, token not provided' })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id) => {
        if (err) return res.status(401).json({ message: 'not authorized, invalid token' })
        req.id = id
        next()
    })
}

// token working weardly

// AJAX ?

// https://stackoverflow.com/questions/28371662/json-web-token-auth-service-checking-status-on-separate-server-to-protect-rout
// https://github.com/mozilla/node-client-sessions
// https://github.com/stormpath/express-stormpath
// https://github.com/stormpath/express-stormpath/blob/master/lib/authentication.js
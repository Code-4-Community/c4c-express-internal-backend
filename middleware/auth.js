const jwt = require('jsonwebtoken')

const NodeCache = require('node-cache')
const tokenCache = new NodeCache({ checkperiod: 600 }) // token cache, automatically clears the cache of expired tokens every 10 minutes

// Middleware: function(req, res, next)

// authenticate : int -> Middleware
// Custom middleware to verify jwt given the required privilege level
// also checks the token is not blacklisted (in the tokenCache)
// as well as standard check for good signature and unexpired token
// decoded token is stored in req.token
function authenticate (requiredPrivilegeLevel) {
  let token
  return (req, res, next) => {
    try {
      token = req.headers.authorization.split(' ')[1]
    } catch (err) {
      const betterError = new Error(
        'Malformed Authorization header. Token should be sent under Authorization as Bearer <token>'
      )

      return res.status(401).json({
        err: betterError
      })
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) return res.status(401).json({ err })
      if (tokenCache.has(decoded.jti)) {
        const err = new Error('Blacklisted token')
        return res.status(401).json({ err })
      }

      if (decoded.privilege_level < requiredPrivilegeLevel) {
        return res
          .status(401)
          .json({ error: 'Insufficent privilege to access this resource' })
      }
      req.token = decoded
      next()
    })
  }
}

module.exports = {
  tokenCache,
  authenticate
}

const router = require('express').Router()
const User = require('../models/user.model')

const crypto = require('crypto')
const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require('jsonwebtoken')

const authUtils = require('../middleware/auth')

// Returns a valid JWT for 60 minutes if the username and password match a user in the db
router.route('/login').post((req, res) => {
  const email = req.body.email
  const plaintextPassword = req.body.password

  User.findOne(
    { email: email },
    'hashedPassword privilegeLevel',
    (err, user) => {
      if (err) return res.status(400).json({ err })

      const hashedPassword = user.hashedPassword
      const userId = user._id
      const privilegeLevel = user.privilegeLevel

      bcrypt.compare(plaintextPassword, hashedPassword, (err, isValid) => {
        if (err) return res.status(400).json({ err })
        if (!isValid) {
          const err = new Error('Incorrect password.')
          return res.status(401).json({ err })
        }

        // jti is a short cryptographically random string to id the token
        const jti = crypto.randomBytes(16).toString('hex')

        const token = jwt.sign(
          { user_id: userId, privilege_level: privilegeLevel },
          process.env.JWT_SECRET,
          {
            jwtid: jti,
            expiresIn: '1h'
          }
        )

        res.setHeader('Authentication', `Bearer ${token}`)
        res.status(200).json({ token }) // Is this a security concern?
      })
    }
  )
})

// Creates an account with privilege level 0
router.route('/signup').post((req, res) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const plaintextPassword = req.body.password
  const currentYear = req.body.currentYear
  const major = req.body.major

  bcrypt
    .hash(plaintextPassword, saltRounds)
    .then(hashedPassword => {
      const newUser = new User({
        email,
        firstName,
        lastName,
        hashedPassword,
        currentYear,
        major
      })

      newUser
        .save()
        .then(user => {
          delete user.hashedPassword
          res.status(201).json(user)
        })
        .catch(err => res.status(400).json({ err }))
    })
    .catch(err => res.status(500).json(err))
})

// Blacklists JWT
router.route('/logout').post(authUtils.authenticate(0), function (req, res) {
  const nowInSeconds = Math.round(Date.now() / 1000)
  // blacklisted tokens are stored in the tokenCache keyed by jti, which automatically cleans expired tokens every 10 min
  authUtils.tokenCache.set(req.token.jti, '', req.token.exp - nowInSeconds)
  res.status(200).json('Logged out successfully!')
})

module.exports = router

const router = require('express').Router()
const User = require('../models/user.model')

const removeHashedPassword = '-hashedPassword'

// Gets all users
// public
router.route('/').get((req, res) => {
  User.find({}, removeHashedPassword)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.status(400).json({ err }))
})

// Get a user by ID
// public
router.route('/:id').get(function (req, res, next) {
  User.findById(req.params.id, removeHashedPassword)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => res.status(400).json({ err }))
})

module.exports = router

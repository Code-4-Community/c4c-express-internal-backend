const router = require('express').Router()
const Event = require('../models/event.model')
const User = require('../models/user.model')

const authUtils = require('../middleware/auth')
const removeHashedPassword = '-hashedPassword'

// Gets all events
// public
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.status(200).json(events))
    .catch(err => res.status(400).json({ err }))
})

// Get an event by ID
// public
router.route('/:id').get(function (req, res, next) {
  Event.findById(req.params.id)
    .then(event => res.status(200).json(event))
    .catch(err => res.status(400).json({ err }))
})
// Create an event
// Requires level 1 privileges
router.route('/').post(authUtils.authenticate(1), function (req, res, next) {
  const title = req.body.title
  const subtitle = req.body.subtitle
  const description = req.body.description
  const eventDate = Date.parse(req.body.eventDate)
  const eventCode = req.body.eventCode
  const isOpen = req.body.isOpen
  const imageUrl = req.body.imageUrl

  const newEvent = new Event({
    title,
    subtitle,
    description,
    eventDate,
    eventCode,
    isOpen,
    imageUrl
  })

  newEvent
    .save()
    .then(event => res.status(201).json(event))
    .catch(err => res.status(400).json({ err }))
})
// Update an event by ID
// Requires level 1 privileges
router.route('/:id').put(authUtils.authenticate(1), function (req, res, next) {
  Event.findById(req.params.id)
    .then(event => {
      event.title = req.body.title
      event.subtitle = req.body.subtitle
      event.description = req.body.description
      event.eventDate = Date.parse(req.body.eventDate)
      event.eventCode = req.body.eventCode
      event.isOpen = req.body.isOpen
      event.imageUrl = req.body.imageUrl

      event
        .save()
        .then(event => res.status(200).json(event))
        .catch(err => res.status(400).json({ err }))
    })
    .catch(err => res.status(400).json({ err }))
})
// Delete an event by ID
// Requires level 1 privileges
router
  .route('/:id')
  .delete(authUtils.authenticate(1), function (req, res, next) {
    Event.findByIdAndDelete(req.params.id)
      .then(event => res.status(200).json(event))
      .catch(err => res.status(400).json({ err }))
  })

// Check-in by Event code
// Requires level 0 privileges
// Checks in the user with the userId accociated with this JWT to the event matching the given event code
router
  .route('/checkin/:code')
  .post(authUtils.authenticate(0), function (req, res, next) {
    Event.findOne({ eventCode: req.params.code })
      .then(event => {
        if (!event.isOpen) {
          throw new Error('event is not open for check in')
        }
        if (event.attendees.includes(req.token.user_id)) {
          throw new Error('user is already checked in')
        }
        event.attendees.push(req.token.user_id)
        event
          .save()
          .then(event => {
            const userList = []
            for (const userId in event.attendees) {
              User.findById(userId, removeHashedPassword)
                .then(user => userList.push(user))
                .catch(err => res.status(400).json({ err }))
            }
            event.attendees = userList
            res.status(201).json(event)
          })
          .catch(err => res.status(400).json({ err }))
      })
      .catch(err => res.status(400).json({ err }))
  })

module.exports = router

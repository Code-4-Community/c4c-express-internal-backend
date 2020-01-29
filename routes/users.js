const router = require("express").Router();
let User = require("../models/user.model");

const authenticate = require("../middleware/auth");
const publicUserData = "email firstName lastName currentYear major";

//Gets all users
//public
router.route("/").get((req, res) => {
  User.find({}, publicUserData)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(400).json({ error: err }));
});

//Get a user by ID
//public
router.route("/:id").get(function(req, res, next) {
  User.findById(req.params.id, publicUserData)
    .then(user => {
      delete user.hashedPassword;
      res.status(200).json(user);
    })
    .catch(err => res.status(400).json({ error: err }));
});

module.exports = router;

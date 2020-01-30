const mongoose = require('mongoose')

const Schema = mongoose.Schema

// one to one relationship, really #applications < # users and users <have an> application
// should be embedded doc
const applicationSchema = new Schema(
  {
    resume: { type: Buffer, required: true },
    interests: { type: [String], required: true },
    priorInvolvement: { type: String, required: true },
    whyJoin: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    currentYear: { type: Number, required: true },
    major: { type: String, required: true },
    privilegeLevel: { type: Number, default: 0, required: true },

    application: { type: applicationSchema }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User

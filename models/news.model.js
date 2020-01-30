const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    datePublished: { type: Date, default: Date.now },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const News = mongoose.model('News', newsSchema)

module.exports = News

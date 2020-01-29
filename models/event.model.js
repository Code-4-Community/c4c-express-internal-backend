const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventCode: { type: String, required: true, unique: true },
    isOpen: { type: Boolean, required: true },
    attendees: { type: [ObjectId], default: [] },
    imageUrl: { type: String, required: true }

  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

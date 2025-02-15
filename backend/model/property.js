const mongoose = require('mongoose');
const { Schema } = mongoose;

// Property Schema
const propertySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableUnits: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending_publish', 'published', 'rejected'],
    default: 'pending_publish',
  },
  approvalStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  builderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'builder',
    required: true,
  },
  submissionDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model('Property', propertySchema);

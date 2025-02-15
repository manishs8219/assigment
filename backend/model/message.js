const mongoose = require('mongoose');
const { Schema } = mongoose;

// Message Schema
const messageSchema = new Schema({
  builderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'builder',

  },
  message: {
    type: String,
   
  },
  status: {
    type: String,
    enum: ['sent', 'read'],
    default: 'sent',
  },
  sentDate: {
    type: Date,
    default: Date.now,
  
  },
});

module.exports = mongoose.model('message', messageSchema);

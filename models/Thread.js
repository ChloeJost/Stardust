const mongoose = require('mongoose');

const ThreadSchema = mongoose.Schema({
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastCommentedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Thread', ThreadSchema);

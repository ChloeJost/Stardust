const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const Thread = require('../models/Thread');
const Comment = require('../models/Comment');
// ADD THREAD
router.post(
  '/',
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { author, name, active, title } = req.body;
    try {
      const newThread = new Thread({
        author,
        name,
        active,
        title,
      });
      await newThread.save();
      res.send(newThread);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('thread error');
    }
  }
);
// ADD COMMENT
router.post(
  '/:threadId/comments',
  async (req, res) => {
    const { threadId } = req.params;
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { author, name, text, updatedAt } = req.body;
    try {
      const newComment = new Comment({
        author,
        name,
        text,
        updatedAt,
      });
      await newComment.save();
      const thread = await Thread.findById(threadId);
      thread.comments.push(newComment._id);
      thread.lastCommentedAt = Date.now();
      await thread.save();
      res.json(newComment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);
router.get('/', async (req, res) => {
  try {
    const threads = await Thread.find().populate('comments');
    res.json(threads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('thread not found');
  }
});
router.delete('/:threadId/comments/:commentId/:userId', async (req, res) => {
  const { threadId, commentId, userId } = req.params;
  console.log(req.params);
  try {
    const comment = await Comment.findById(commentId);
    const thread = await Thread.findById(threadId);
    console.log(commentId);
    if (comment.author == (userId)) {
      await thread.updateOne(
        console.log(thread),
        {
        comments: [
          console.log(thread.comments),
          thread.comments.find(
            threadComment => threadComment === commentId
          ),
        ],
      });
      ;
      await comment.delete();
      res.status(200);
      res.json('Comment deleted');
    } else {
      res.status(403);
      res.json('User not authorized');
    }
  } catch (err) {
    console.error(err.message);
    throw new Error(err);
  }
});
module.exports = router;
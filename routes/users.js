const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const User = require('../models/User');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404);
    }
  } catch (err) {
    console.error(err.message);
    throw new Error('User not found');
  }
});

router.put('/:id', async (req, res) => {
  console.log(req.params);
  const userId = ObjectID(req.params.id);
  console.log(userId, "back");
  const name = req.body.name;
  console.log(req.body.name);
  try {
    const user = await User.findByIdAndUpdate(userId, {$set: { "name":name} } );
    await res.json(user);
  } catch (err) {
    console.error("on est dans le catch", err.message);
    res.status(500).send('User not updated');
  }
});

router.delete('/:id', async (req, res) => {
  console.log(req.params);
  const userId = ObjectID(req.params.id);
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    console.log("Did it");
    res.json(deleteUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('User not deleted');
  }
});



module.exports = router;

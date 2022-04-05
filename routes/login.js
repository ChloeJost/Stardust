const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const config = require('config');

const User = require('../models/User');
const router = express.Router();

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "User doesn't exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid password' });
      }

      // if (!user.isVerified)
      //   return res.status(401).send({
      //     type: 'not-verified',
      //     msg: 'Your account has not been verified.',
      //   });

      const payload = {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          city: user.city,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          // expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
          console.log(jwt.decode(token).user);
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;

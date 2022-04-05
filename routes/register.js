const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');

const User = require('../models/User');
const Token = require('../models/Token');

router.post(
  '/',
  [
    check('name', 'Veuillez ajouter un nom')
      .not()
      .isEmpty(),
    check('email', 'Veuillez entrer un e-mail valide').isEmail(),
    check(
      'password',
      'Veuillez entrer un mot de passe avec 6 caracteres minimum'
    ).isLength({ min: 6 }),
    check('city', 'Veuillez ajouter une votre ville')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, city } = req.body;

    try {
      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }

      const newUser = new User({
        name,
        email,
        password,
        city,
      });

      const salt = await bcrypt.genSalt(10);

      newUser.password = await bcrypt.hash(password, salt);

      await newUser.save();
     

      const payload = {
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          city: newUser.city,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          // expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  }

);

module.exports = router;

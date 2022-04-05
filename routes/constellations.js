const express = require('express');
const router = express.Router();

const Constellation = require('../models/Constellation');

router.post(
  '/',

  async (req, res) => {
    const {
      season,
      mainStar,
      hemisphereQuadrant,
      origin,
      latinName,
      englishName,
      frenchName,
      declinaison,
      desc,
    } = req.body;
    try {
      let constellation = await Constellation.findOne({ _id });
      if (constellation) {
        return res.status(400);
      }
      const newConstellation = new Constellation({
        season,
        mainStar,
        hemisphereQuadrant,
        origin,
        latinName,
        englishName,
        frenchName,
        declinaison,
        desc,
      });

      await newConstellation.save();
      res.status(200);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

router.get(
  '/',

  async (req, res) => {
    try {
      const constellations = await Constellation.find({});
      res.json(constellations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('constellations not found');
    }
  }
);
module.exports = router;

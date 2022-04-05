const mongoose = require('mongoose');

const ConstellationSchema = mongoose.Schema({
  season: {
    type: String,
    required: true,
  },
  mainStar: {
    type: String,
    required: true,
  },
  hemisphereQuadrant: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  latinName: {
    type: String,
    required: true,
  },
  englishName: {
    type: String,
    required: true,
  },
  frenchName: {
    type: String,
    required: true,
  },
  declinaison: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Constellation', ConstellationSchema);

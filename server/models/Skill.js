const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Skill', skillSchema);

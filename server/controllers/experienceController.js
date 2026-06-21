const Experience = require('../models/Experience');

const getAllExperience = async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(experience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllExperience, createExperience, updateExperience, deleteExperience };

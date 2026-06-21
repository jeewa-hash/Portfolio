const express = require('express');
const { getAllExperience, createExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

router.get('/', getAllExperience);
router.post('/', authGuard, createExperience);
router.put('/:id', authGuard, updateExperience);
router.delete('/:id', authGuard, deleteExperience);

module.exports = router;

const express = require('express');
const { getAllSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillController');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', authGuard, createSkill);
router.put('/:id', authGuard, updateSkill);
router.delete('/:id', authGuard, deleteSkill);

module.exports = router;

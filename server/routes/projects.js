const express = require('express');
const { getAllProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', authGuard, createProject);
router.put('/:id', authGuard, updateProject);
router.delete('/:id', authGuard, deleteProject);

module.exports = router;

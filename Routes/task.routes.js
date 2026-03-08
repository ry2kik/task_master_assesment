import express from 'express'
import userAuth from '../middleware/auth';

const router = express.Router();

router.post('/task', userAuth, createTask);
router.get('/task?status=open');
router.get('/task?search=')
router.get('/tasks', fetchTasks);
router.post('/task/:id', taskById);

export default router;
import express from 'express'
import userAuth from '../middleware/auth.js';
import { assignTask, changeStatus, createTask, deleteTask, filterTaskByStatus, getTaskById, searchTasks, updateTask } from '../Controller/task.controller.js';

const router = express.Router();

router.post('/task', userAuth, createTask);
router.get('/task/status', userAuth, filterTaskByStatus);
router.get('/task/search', userAuth, searchTasks);
router.patch('/task/:id/status', userAuth, changeStatus)
router.get('/task/:id', userAuth, getTaskById);
router.delete('/task/:id', userAuth, deleteTask);
router.put('/task/:id', userAuth, updateTask);
router.put('/task/assign/:taskId', userAuth, assignTask);

export default router;
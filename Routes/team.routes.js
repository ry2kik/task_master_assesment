import express from 'express'
import { createTeam, addMember } from '../Controller/team.controller.js';

const router = express();

router.post('/team', createTeam);
router.post('/team/:id', addMember);

export default router;
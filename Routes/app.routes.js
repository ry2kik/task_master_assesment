import express from 'express'
import { signupController, loginController, fetchProfile } from '../Controller/user.controller.js';

const router = express.Router();

router.post('/register', signupController);
router.post('/login', loginController);
router.get("/profile", fetchProfile);

export default router;
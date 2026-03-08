import express from 'express'
import { signupController, loginController, fetchProfile, logoutController } from '../Controller/user.controller.js';
import userAuth from '../middleware/auth.js'

const router = express.Router();

router.post('/register', signupController);
router.post('/login', loginController);
router.patch("/profile", userAuth, fetchProfile);
router.get('/logout', logoutController)

export default router;
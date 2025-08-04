import express from 'express';
import { signUpUser } from '../controllers/useController.js';

const router = express.Router();

router.post('/signUp', signUpUser);

export default router;
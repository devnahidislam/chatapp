import express from 'express';
import { register } from '../controllers/auth.js';

const router = express.Router();

// Create a User / Register
router.post('/register', register);

export default router;

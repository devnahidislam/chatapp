import express from 'express';
import { deleteUser, follow, getUser, unFollow, update } from '../controllers/user.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Update
router.put('/:id', verifyUser, update);

// Delete
router.delete('/:id', verifyUser, deleteUser);

// Get Users
router.get('/:id', verifyUser, getUser);

// Follow
router.put('/:id/:fid/follow', verifyUser, follow);

// Unfollow
router.put('/:id/:ufid/unfollow', verifyUser, unFollow);

export default router;

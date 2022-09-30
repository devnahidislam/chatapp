import express from 'express';
import { update } from '../controllers/user.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Update
router.put('/:id', verifyUser, update);
// Delete
// Get Users
router.get('/', (req, res) => {
  res.send('Users Route');
});
// Follow
// Unfollow
export default router;

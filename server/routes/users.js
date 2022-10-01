import express from 'express';
import { deleteUser, update } from '../controllers/user.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Update
router.put('/:id', verifyUser, update);
// Delete
router.delete('/:id', verifyUser, deleteUser);
// Get Users
router.get('/', (req, res) => {
  res.send('Users Route');
});
// Follow
// Unfollow
export default router;

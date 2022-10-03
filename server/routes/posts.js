import express from 'express';
import { createPost, deletePost, getPost, likePost, timelinePost, updatePost } from '../controllers/posts.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Create post
router.post('/:id/create', verifyUser, createPost);

// Update post
router.put('/:id/:pid', verifyUser, updatePost);

// Delete post
router.delete('/:id/:pid', verifyUser, deletePost);

// Like post
router.put('/:id/:pid/like', verifyUser, likePost);

// Get post
router.get('/:pid', getPost);

// Get Timeline posts
router.get('/:id/timeline', verifyUser, timelinePost);

export default router;

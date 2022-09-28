import express from 'express';

const router = express.Router();

// Create a User
router.get('/', (req, res) => {
  res.send('Auth route');
});

export default router;

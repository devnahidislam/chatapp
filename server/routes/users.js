import express from 'express';

const router = express.Router();

// Get Users
router.get('/', (req, res) => {
  res.send('Users Route');
});

export default router;

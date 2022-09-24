import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
connectDB();

const PORT = process.env.PORT || 5000;

app.use((err, res) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || 'Something went wrong.';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

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

import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(createError(401, 'You are not Loged In.'));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, 'Invalid Token.!'));
    req.user = user;

    next();
  });
};

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (token) {
    verifyToken(req, res, () => {
      if (req.params.id === req.user.id || req.user.admin) {
        next();
      } else {
        return next(createError(403, 'You are not authenticated user.'));
      }
    });
  } else {
    return next(createError(401, 'You are not Loged In. User'));
  }
};

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;

  if (token) {
    verifyToken(req, res, () => {
      if (req.params.id === req.user.id && req.user.admin) {
        next();
      } else {
        return next(createError(403, 'You are not User / Admin'));
      }
    });
  } else {
    return next(createError(401, 'You are not Loged In. User'));
  }
};

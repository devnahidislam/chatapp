import User from '../models/User.js';
import { createError } from '../utils/error.js';
import bcrypt from 'bcryptjs';

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id || req.user.admin) {
    if (req.body.password) {
      try {
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
      } catch (error) {
        next(error);
      }
    }

    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send('User account has been updated.');
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, 'You can update only your account.'));
  }
};

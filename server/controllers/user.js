import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const update = async (req, res, next) => {
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
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send('User account has been deleted.');
  } catch (error) {
    next(error);
  }
};

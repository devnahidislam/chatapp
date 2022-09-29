import bcrypt from 'bcryptjs';
import user from '../models/User.js';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new user({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (error) {
    next(error);
  }
};

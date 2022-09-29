import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, 'User Not Found.'));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(401, 'Incorrect password.'));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
        maxAge: 3600000,
      })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};

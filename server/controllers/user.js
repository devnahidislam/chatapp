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

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, updatedAt, ...others } = user._doc;

    res.status(200).send(others);
  } catch (error) {
    next(error);
  }
};

export const follow = async (req, res, next) => {
  if (req.params.fid !== req.user.id) {
    try {
      const user = await User.findById(req.params.fid);
      const currentUser = await User.findById(req.user.id);
      if (!user.followers.includes(req.user.id)) {
        await user.updateOne({ $push: { followers: req.user.id } });
        await currentUser.updateOne({
          $push: { following: req.params.fid },
        });
        res.status(200).send(`You are following ${user.username}`);
      } else {
        res.status(403).send(`You are already following ${user.username}`);
      }
    } catch (error) {
      next(error);
    }
  } else {
    res.status(403).send("You can't follow yourself.");
  }
};

export const unFollow = async (req, res, next) => {
  if (req.params.ufid !== req.user.id) {
    try {
      const user = await User.findById(req.params.ufid);
      const currentUser = await User.findById(req.user.id);
      if (user.followers.includes(req.user.id)) {
        await user.updateOne({ $pull: { followers: req.user.id } });
        await currentUser.updateOne({
          $pull: { following: req.params.ufid },
        });
        res.status(200).send(`You unfollowed ${user.username}`);
      } else {
        res.status(403).send(`You didn't follow ${user.username}`);
      }
    } catch (error) {
      next(error);
    }
  } else {
    res.status(403).send("You can't unfollow yourself");
  }
};

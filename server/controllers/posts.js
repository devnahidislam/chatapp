import Post from '../models/Post.js';
import User from '../models/User.js';
import { createError } from '../utils/error.js';

// Create post

export const createPost = async (req, res, next) => {
  const newPost = new Post({ userId: req.user.id, ...req.body });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    next(error);
  }
};

// Update post

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.pid);
    if (post) {
      if (req.user.id === post.userId || req.user.admin) {
        await post.updateOne({ $set: req.body });
        res.status(200).send('Post has been updated.');
      } else {
        next(createError(403, 'You can update only your post.'));
      }
    } else {
      next(createError(403, 'Post not found.'));
    }
  } catch (error) {
    next(error);
  }
};

// Delete post

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.pid);
    if (post) {
      if (req.user.id === post.userId || req.user.admin) {
        await post.deleteOne();
        res.status(200).send('Post has been deleted.');
      } else {
        next(createError(403, 'You can delete only your post.'));
      }
    } else {
      next(createError(403, 'Post not found.'));
    }
  } catch (error) {
    next(error);
  }
};

// Like post

export const likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.pid);
    if (!post.likes.includes(req.user.id)) {
      await post.updateOne({ $push: { likes: req.user.id } });
      res.status(200).send('The post has been Liked.');
    } else {
      await post.updateOne({ $pull: { likes: req.user.id } });
      res.status(200).send('The post has been Disiked.');
    }
  } catch (error) {
    next(error);
  }
};

// Get post

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.pid);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// Get Timeline posts

export const timelinePost = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    const userPosts = await Post.find({ userId: currentUser._id });

    const friendsPosts = await Promise.all(
      currentUser.following?.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    if (userPosts) {
      res.status(403).send('No post available.');
    }
    res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    next(error);
  }
};

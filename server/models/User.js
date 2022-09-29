import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      uniqued: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePic: {
      type: String,
      default: '',
    },
    coverPic: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import { Users } from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Post = ({ post }) => {
  const { currentUser } = useSelector((state) => state.user);

  const likeHandler = () => {
    try {
      axios.put(`/posts/${currentUser._id}/${post._id}/like`);
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const timelinePostOwner = await axios.get(`/users/${post?.userId}`);
        setUser(timelinePostOwner.data);
      } catch (error) {}
    };
    fetchUser();
  }, [post?.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={'/profile'}>
              <img
                src={PF + user.profilePic || PF + 'person/noAvatar.png'}
                alt="avatar"
                className="profileImg"
              />
            </Link>
            <Link to={'/profile'}>
              <span className="userName">{user.username || 'Username'}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <IconButton color="default" aria-label="More">
              <MoreHorizIcon />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post.desc}</div>
          {post.img && <img src={PF + post?.img} alt="postPic" className="postImg" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton color="default" aria-label="Like" onClick={likeHandler}>
              <img className="likeBtn" src="assets/like.png" alt="Like" />
            </IconButton>
            <IconButton color="default" aria-label="Love" onClick={likeHandler}>
              <img className="likeBtn" src="assets/heart.png" alt="Love" />
            </IconButton>
            <span className="likeCounter">{post.likes.length}</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import { Users } from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes?.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post?.userId}`);
      setUser(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, []);

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
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <IconButton color="default" aria-label="More">
              <MoreHorizIcon />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post.desc}</div>
          <img src={PF + post?.img} alt="postPic" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton color="default" aria-label="Like" onClick={likeHandler}>
              <img className="likeBtn" src="assets/like.png" alt="Like" />
            </IconButton>
            <IconButton color="default" aria-label="Love" onClick={likeHandler}>
              <img className="likeBtn" src="assets/heart.png" alt="Love" />
            </IconButton>
            <span className="likeCounter">{like}</span>
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

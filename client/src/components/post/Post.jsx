import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/2.jpeg"
              alt="avatar"
              className="profileImg"
            />
            <span className="userName">Nahid Islam</span>
            <span className="postDate">2 minute ago</span>
          </div>
          <div className="postTopRight">
            <IconButton color="default" aria-label="More">
              <MoreHorizIcon />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">Hey, It's my first post:)</div>
          <img src="/assets/post/3.jpeg" alt="avatar" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton color="default" aria-label="Like">
              <img className="likeBtn" src="assets/like.png" alt="Like" />
            </IconButton>
            <IconButton color="default" aria-label="Love">
              <img className="likeBtn" src="assets/heart.png" alt="Love" />
            </IconButton>
            <span className="likeCounter">15</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">12 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import { Users } from '../../dummyData.js';

const Post = ({post}) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="avatar"
              className="profileImg"
            />
            <span className="userName">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
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
          <img src={post.photo} alt="postPic" className="postImg" />
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

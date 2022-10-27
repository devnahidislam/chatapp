import './share.scss';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MoodIcon from '@mui/icons-material/Mood';
import { useSelector } from 'react-redux';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Share = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              currentUser.profilePic
                ? PF + currentUser.profilePic
                : PF + 'person/noAvatar.png'
            }
            alt="avatar"
            className="shareImg"
          />
          <div className="shareInputContainer">
            <input
              placeholder={"What's on your mind, " + currentUser?.username +' ?'}
              className="shareInput"
            />
          </div>
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOption">
            <VideoCameraBackIcon color="error" />
            <div className="shareOptionText">Live Video</div>
          </div>
          <div className="shareOption">
            <PermMediaIcon color="success" />
            <div className="shareOptionText">Photo/Video</div>
          </div>
          <div className="shareOption">
            <MoodIcon color="warning" />
            <div className="shareOptionText">Feeeling/Activity</div>
          </div>
          <div className="shareBtn">Post</div>
        </div>
      </div>
    </div>
  );
};

export default Share;

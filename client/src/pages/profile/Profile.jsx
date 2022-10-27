import './profile.scss';
import Topbar from './../../components/topbar/Topbar';
import Sidebar from './../../components/sidebar/Sidebar';
import Feed from './../../components/feed/Feed';
import Rightbar from './../../components/rightbar/Rightbar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useSelector } from 'react-redux';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  currentUser.profilePic
                    ? PF + currentUser.profilePic
                    : PF + 'person/noAvatar.png'
                }
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">
                  {currentUser?.username || 'No User'}
                </h4>
                <span className="profileInfoDesc">Hi friend...</span>
                <div className="myActionButtons">
                  <div className="friendsProfiles">
                    <img
                      src="assets/person/2.jpeg"
                      alt=""
                      className="friendsProfilePic"
                    />
                    <img
                      src="assets/person/1.jpeg"
                      alt=""
                      className="friendsProfilePic"
                    />
                    <img
                      src="assets/person/4.jpeg"
                      alt=""
                      className="friendsProfilePic"
                    />
                    <img
                      src="assets/person/5.jpeg"
                      alt=""
                      className="friendsProfilePic"
                    />
                    <img
                      src="assets/person/7.jpeg"
                      alt=""
                      className="friendsProfilePic"
                    />
                  </div>
                  <div className="myActionRightBtn">
                    <div className="addStoryBtn">
                      <AddCircleOutlinedIcon fontSize="small" />
                      Add to story
                    </div>
                    <div className="addStoryBtn editProfile">
                      <ModeEditIcon fontSize="small" />
                      Edit profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profileRightBotton">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

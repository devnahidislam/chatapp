import './profile.scss';
import Topbar from './../../components/topbar/Topbar';
import Sidebar from './../../components/sidebar/Sidebar';
import Feed from './../../components/feed/Feed';
import Rightbar from './../../components/rightbar/Rightbar';

const Profile = () => {
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
                src="assets/person/2.jpeg"
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Nahid Islam</h4>
                <span className="profileInfoDesc">Hi friend...</span>
                <div className="friendsProfiles">
                  <img src="assets/person/2.jpeg" alt="" className="friendsProfilePic" />
                  <img src="assets/person/3.jpeg" alt="" className="friendsProfilePic" />
                  <img src="assets/person/4.jpeg" alt="" className="friendsProfilePic" />
                  <img src="assets/person/5.jpeg" alt="" className="friendsProfilePic" />
                </div>
              </div>
            </div>
          </div>
          <div className="profileRightBotton">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

import './online.scss';

const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarFriendImgContainer">
        <img src={user.profilePicture} alt="avatar" className="friendImg" />
        <div className="activeStatus"></div>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
};

export default Online;

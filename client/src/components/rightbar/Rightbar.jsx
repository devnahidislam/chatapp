import './rightbar.scss';
import { IconButton } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Jahid Hasan</b> and <b>3 other friends</b> have birthdays today.
          </span>
        </div>
        <div className="friendListContainer">
          <div className="headerTitle">
            <h4>Contacts</h4>
            <div className="headerBtnIcon">
              <IconButton color="default" aria-label="New Room">
                <VideoCallIcon />
              </IconButton>
              <IconButton color="default" aria-label="Search">
                <SearchIcon />
              </IconButton>
              <IconButton color="default" aria-label="More">
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>
          <ul className="rightbarFriendsList">
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/1.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Jahid Hasan</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/4.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Arina Eric</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/6.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Mery Lee</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/7.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Anjelina Joli</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/8.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Jara Mehbub</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/8.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Jara Mehbub</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/8.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Jara Mehbub</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/8.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Jara Mehbub</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="/assets/person/8.jpeg"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Jara Mehbub</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

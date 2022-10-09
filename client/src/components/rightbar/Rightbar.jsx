import './rightbar.scss';
import { IconButton } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Users } from '../../dummyData';
import Online from '../online/Online';

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
          <ul>
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

import './topbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">facebook</span>
      </div>
      <div className="topbaCenter">
        <div className="searchbar">
          <SearchIcon fontSize="small" className="searchIcon" />
          <input placeholder="Search..." className="serarchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Home</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <MapsUgcOutlinedIcon fontSize="small" />
            <span className="topbarIconBadge">9</span>
          </div>
          <div className="topbarIconItem">
            <PersonIcon fontSize="small" />
            <span className="topbarIconBadge">22</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon fontSize="small" />
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        <div className="avatar">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

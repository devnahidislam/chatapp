import './topbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    let menuHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', menuHandler);
  });
  return domNode;
};

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((open) => !open);

  const domNode = useClickOutside(() => {
    setOpen(false);
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate('/login');
  };

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
        <div className="avatar" ref={domNode}>
          <div className="menuToggle" onClick={() => toggle()}>
            <img
              src="/assets/person/2.jpeg"
              alt="avatar"
              className="topbarImg"
            />
            <div className="profileBadge">
              <KeyboardArrowDownIcon className="badgeIcon" />
            </div>
          </div>
          {open && (
            <div className="menu">
              <Link to={'/profile'}>
                <div className="profile">
                  <img src="/assets/person/2.jpeg" alt="avatar" />
                  Nahid Islam
                </div>
              </Link>
              <div className="menuOption">
                <SettingsOutlinedIcon fontSize="small" />
                Settings & Privacy
              </div>
              <div className="menuOption">
                <HelpOutlineIcon fontSize="small" />
                Help & Support
              </div>
              <div className="menuOption">
                <FeedbackOutlinedIcon fontSize="small" />
                Give Feedback
              </div>
              <Link to={'/login'}>
                <div className="menuOption">
                  <LoginIcon fontSize="small" />
                  Log In
                </div>
              </Link>
              <div onClick={handleLogout} className="menuOption">
                <LogoutIcon fontSize="small" />
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

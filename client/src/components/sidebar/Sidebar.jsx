import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={'/'}>
            <li className="sidebarListItem">
              <HomeIcon className="sidebarListItemIcon" />
              <span className="sidebarListItemText">Home</span>
            </li>
          </Link>
          <Link to={'/profile'}>
            <li className="sidebarListItem">
              <img
                src={
                  currentUser?.profilePic
                    ? PF + currentUser.profilePic
                    : PF + 'person/noAvatar.png'
                }
                alt="avatar"
                className="sidebarImg"
              />
              <span
                className="sidebarListItemText"
                style={{ fontWeight: '500' }}
              >
                {currentUser?.username || 'No User'}
              </span>
            </li>
          </Link>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <PeopleIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkHistoryOutlinedIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <hr />

          {Users.map((user) => (
            <li key={user.id} className="sidebarListItem">
              <img
                src={user.profilePicture}
                alt="avatar"
                className="sidebarImg"
              />
              <span className="sidebarListItemText">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

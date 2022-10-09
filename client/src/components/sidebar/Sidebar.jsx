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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <img
              src="/assets/person/2.jpeg"
              alt="avatar"
              className="sidebarImg"
            />
            <span className="sidebarListItemText" style={{ fontWeight: '500' }}>
              Nahid Islam
            </span>
          </li>
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

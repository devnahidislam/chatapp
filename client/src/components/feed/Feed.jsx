import Post from '../post/Post';
import Share from '../share/Share';
import './feed.scss';
import { Posts } from '../../dummyData';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchStart, fetchSuccess } from '../../redux/postSlice';

const Feed = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const timelinePosts = await axios.get(
        `/posts/timeline/${currentUser?._id}`
      );
      setPosts(timelinePosts.data);
      
      dispatch(fetchStart());
      dispatch(fetchSuccess(timelinePosts.data));
    };
    fetchPosts();
  }, [currentUser?._id, dispatch]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

import Post from '../post/Post';
import Share from '../share/Share';
import './feed.scss';
import { Posts } from '../../dummyData';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchFailed, fetchStart, fetchSuccess } from '../../redux/postSlice';

const Feed = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        dispatch(fetchStart());
        const timelinePosts = await axios.get(
          `/posts/timeline/${currentUser?._id}`
        );
        setPosts(timelinePosts.data);
        dispatch(fetchSuccess(timelinePosts.data));
      };
      fetchPosts();
    } catch (error) {
      dispatch(fetchFailed(error));
    }
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

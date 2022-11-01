import './share.scss';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MoodIcon from '@mui/icons-material/Mood';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import axios from 'axios';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Share = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [postPercent, setPostPersent] = useState(0);

  const uploadPostFile = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, 'post/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setPostPersent(Math.round(progress));

        console.log('Upload is ' + progress + '% done');

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );

    await axios.post(`/posts/${currentUser._id}/create`, {
      desc,
      imgUrl,
    });
  };

  useEffect(() => {
    file && uploadPostFile(file, imgUrl);
  }, [file]);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              currentUser?.profilePic
                ? PF + currentUser.profilePic
                : PF + 'person/noAvatar.png'
            }
            alt="avatar"
            className="shareImg"
          />
          <div className="shareInputContainer">
            <input
              placeholder={
                "What's on your mind, " + currentUser?.username + ' ?'
              }
              className="shareInput"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
        </div>
        <hr />
        <form className="shareBottom" onSubmit={uploadPostFile}>
          <div className="shareOption">
            <VideoCameraBackIcon color="error" />
            <span className="shareOptionText">Live Video</span>
          </div>
          <label htmlFor="file" className="shareOption">
            {postPercent > 0 ? (
              'Uploading:' + postPercent + '%'
            ) : (
              <>
                <PermMediaIcon color="success" />
                <span className="shareOptionText">Photo/Video</span>
                <input
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </>
            )}
          </label>
          <div className="shareOption">
            <MoodIcon color="warning" />
            <span className="shareOptionText">Feeeling/Activity</span>
          </div>
          <div className="shareBtn" type="submit">
            Share
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;

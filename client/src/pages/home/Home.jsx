import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import Topbar from './../../components/topbar/Topbar';

const Home = () => {
  return (
    <>
      <Topbar />
      <IconButton>
        <HomeIcon color="primary" fontSize="large" />
      </IconButton>
      Home page.
    </>
  );
};

export default Home;

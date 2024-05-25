import React from 'react';
import { CssBaseline, Box, Container, Input, Button, Typography } from '@mui/joy';
import Sidebar from './sidebar';

function GoogleSearch() {
  return (
    <>
      <CssBaseline />
      <Sidebar />

      <Container maxWidth="lg" sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent:'center'}}>
        <Box sx={{ flex: 2, textAlign: 'center', maxWidth: '500px' }}>
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" style={{ width: '50%' }} />
          <div className="gcse-search"></div>
        </Box>
      </Container>
      <Sidebar />

    </>
  );
}

export default GoogleSearch;

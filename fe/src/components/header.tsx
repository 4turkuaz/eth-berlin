import React from 'react';
import '../style/Header.css';
import { Box, Typography } from '@mui/joy';

function Header() {
  return (
    <header className="App-header">
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box display={'flex'} >
          <img src="https://framerusercontent.com/images/SmVLY5TwJDtVXHzKjU3pWW7qqk.png"  alt="logo" width={30} height={30}  />
          <Typography level="h4" component="div" sx={{ flexGrow: 1, marginLeft:1 }}>Zero Knowledge Ad Service</Typography>
        </Box>
      </Box>
    </header>
  );
}

export default Header;

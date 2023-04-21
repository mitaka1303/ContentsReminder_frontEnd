import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login';
import { useState } from 'react';

export default function ButtonAppBar(props) {
  const [visibleLogin, setVisibleLogin] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ContentsReminder
          </Typography>
          <Button color="inherit" onClick={()=>setVisibleLogin(!visibleLogin)}>Login</Button>
        </Toolbar>
      </AppBar>
      <Login visibleLogin={visibleLogin} changeUserData={props.changeUserData} userData={props.userData}/>
    </Box>
  );
}
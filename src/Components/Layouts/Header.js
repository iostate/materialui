import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default props => (
  <AppBar position="static">
    <Toolbar>
      {/* <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="body2" color="inherit" className={classes.flex}>
        News
      </Typography> */}
      <Typography variant="title" color="inherit">
        Exercise Database
      </Typography>
      {/* <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
);

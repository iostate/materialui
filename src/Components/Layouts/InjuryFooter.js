import React from 'react';
import {Paper, Tab, Tabs} from '@material-ui/core';

export default ({injuries}) => (
  <Paper>
    <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {injuries.map(group => <Tab label={group.title} />)}
    </Tabs>
  </Paper>
);

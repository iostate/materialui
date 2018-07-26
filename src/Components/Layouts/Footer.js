import React from 'react';
import {Paper, Tab, Tabs} from '@material-ui/core';
export default ({muscles}) => (
  <Paper>
    {/* Value keeps track of active class */}
    <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {muscles.map(group => <Tab label={group} />)}
    </Tabs>
  </Paper>
);

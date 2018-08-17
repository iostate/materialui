import React from 'react';
import {Paper, Tab, Tabs} from '@material-ui/core';

export default ({muscles, category, onSelect}) => {
  // Get the current index of the muscle group
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  // Change the state in App.js once a Tab is changed
  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1]);

  return (
    <Paper>
      {/* Value keeps track of active class */}
      {/* onChange = changes the state in App.js once the Tab is changed */}
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

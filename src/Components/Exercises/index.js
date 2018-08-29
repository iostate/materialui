import React, {Fragment} from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
// import LeftPane from './LeftPane';
// import RightPane from './RightPane';

// Functional component that receives left and right pane component

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto',
  },
};

export default ({exercises, category, onSelect, exercise}) => (
  <Grid container>
    {/* Left side Grid */}
    <Grid item sm>
      <Paper style={styles.Paper}>
        {/* For each major muscle group, create a list item with an exercise
      for that muscle group. */}
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment>
                <Typography
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {/* destructure the title for the text
                    id for setting the state back in App.js
                */}
                  {exercises.map(({title, id}) => (
                    <ListItem button>
                      <ListItemText
                        primary={title}
                        onClick={() => onSelect(id)}
                      />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>

    {/* Right side Grid */}
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1" style={{marginTop: 20}}>
          Welcome
        </Typography>
        <Typography variant="subheading" style={{marginTop: 20}}>
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);

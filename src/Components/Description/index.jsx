import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';

function Description(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <TextField id="standard-textarea" placeholder="설문지 설명" multiline />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Description));

import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

function Checkbox(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <span>checkbox</span>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Checkbox));

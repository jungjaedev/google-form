import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Header from './Header';
import Body from './Body';

function Structure(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <Header />
      <Body />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Structure.page,
}));

export default withTheme(componentStyle(Structure));

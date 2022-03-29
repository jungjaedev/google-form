import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Body from './Body';
import Menubar from './Menubar';

function Structure(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <Grid item xs={10}>
        <Header />
        <Body />
      </Grid>
      <Grid item xs={2}>
        <Menubar />
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Structure.page,
}));

export default withTheme(componentStyle(Structure));

import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Title from 'Components/Title';

function Structure(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <Title />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Structure.page,
}));

export default withTheme(componentStyle(Structure));

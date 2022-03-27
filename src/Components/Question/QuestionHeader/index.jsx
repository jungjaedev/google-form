import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function QuestionHeader(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <Grid item xs={8}>
        <TextField className={classes.textfield} required placeholder="질문" variant="filled" />
      </Grid>
      <Grid item xs={4}>
        Dropdown
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  textfield: theme.styles.Default.TextField.root,
}));

export default withTheme(componentStyle(QuestionHeader));

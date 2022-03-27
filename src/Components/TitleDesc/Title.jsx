import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';

function Title(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <TextField
        className={classes.textfield}
        InputProps={{
          className: classes.title,
        }}
        required
        defaultValue="제목 없는 설문지"
      />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  textfield: theme.styles.Default.TextField.root,
  title: theme.styles.Default.TextField.title,
}));

export default withTheme(componentStyle(Title));

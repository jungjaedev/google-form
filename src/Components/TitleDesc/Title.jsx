import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';

import { title, updateTitleAction } from 'Data/manager';

function Title(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const titleContent = useSelector(title);

  const handleTitle = e => {
    dispatch(updateTitleAction(e.target.value));
  };

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.textfield}
        InputProps={{
          className: classes.title,
        }}
        onChange={e => handleTitle(e)}
        value={titleContent}
        required
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

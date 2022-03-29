import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';

import { description, updateDescriptionAction } from 'Data/manager';

function Description(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const descriptionContent = useSelector(description);

  const handleDescription = e => {
    dispatch(updateDescriptionAction(e.target.value));
  };

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.textfield}
        InputProps={{
          className: classes.smallFont,
        }}
        id="standard-textarea"
        placeholder="설문지 설명"
        multiline
        onChange={e => handleDescription(e)}
        value={descriptionContent}
      />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  textfield: theme.styles.Default.TextField.root,
  smallFont: theme.styles.Default.TextField.smallFont,
}));

export default withTheme(componentStyle(Description));

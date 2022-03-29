import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { menubarOffsetTop } from 'Data/manager';

function Menubar(props) {
  const { classes } = props;
  const topOffset = useSelector(menubarOffsetTop);
  return (
    <Box
      className={classes.root}
      style={{
        position: 'absolute',
        backgroundColor: '#fff',
        width: '48px',
        height: 'auto',
        borderRadius: '8px',
        top: `${topOffset}px`,
        transition: `all ease 300ms`,
      }}
    >
      <IconButton>
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Menubar));

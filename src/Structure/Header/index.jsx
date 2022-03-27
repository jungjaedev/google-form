import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Title from 'Components/Title';
import Description from 'Components/Description';

function Header(props) {
  const { classes } = props;
  return (
    <Box className={`${classes.header} ${classes.selectedBox}`}>
      <Title />
      <Description />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  selectedBox: theme.styles.Default.Box.selectedBox,
  header: theme.styles.Default.Structure.header,
}));

export default withTheme(componentStyle(Header));

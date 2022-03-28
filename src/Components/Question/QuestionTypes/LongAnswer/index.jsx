import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function LongAnswer(props) {
  const { classes } = props;
  return (
    <Box className={classes.row}>
      <TextField style={{ width: '60%' }} disabled placeholder="단답형 텍스트" />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(LongAnswer));

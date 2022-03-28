import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

function QuestionBottom(props) {
  const { classes } = props;
  return <Box className={classes.question}>Bottom</Box>;
}

const componentStyle = withStyles(theme => ({
  question: theme.styles.Default.Box.question,
}));

export default withTheme(componentStyle(QuestionBottom));

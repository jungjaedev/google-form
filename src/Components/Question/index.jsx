import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import QuestionHeader from './QuestionHeader';
import MultipleChoice from './QuestionTypes/MultipleChoice';

function Question(props) {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <QuestionHeader />
      <MultipleChoice />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Question));

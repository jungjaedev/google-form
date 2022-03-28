import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import QuestionHeader from './QuestionHeader';
import QuestionBottom from './QuestionBottom';
import MultipleChoice from './QuestionTypes/MultipleChoice';
// import ShortAnswer from './QuestionTypes/ShortAnswer';

function Question(props) {
  const { classes } = props;
  return (
    <Box className={classes.question}>
      <QuestionHeader />
      <MultipleChoice />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  question: theme.styles.Default.Box.question,
}));

export default withTheme(componentStyle(Question));

import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import QuestionHeader from './QuestionHeader';
import QuestionBottom from './QuestionBottom';
// import MultipleChoice from './QuestionTypes/MultipleChoice';
// import ShortAnswer from './QuestionTypes/ShortAnswer';
import LongAnswer from './QuestionTypes/LongAnswer';
// import CheckBox from './QuestionTypes/CheckBox';

function Question(props) {
  const { classes } = props;
  return (
    <Box className={classes.question}>
      <QuestionHeader />
      <LongAnswer />
      <Divider style={{ marginTop: 30, width: '100%' }} />
      <QuestionBottom />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  question: theme.styles.Default.Box.question,
}));

export default withTheme(componentStyle(Question));

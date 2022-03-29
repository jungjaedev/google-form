import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Question from 'Components/Question';

import { questionList, updateQuestionListAction } from 'Data/manager';

function Body(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const questionArray = useSelector(questionList);
  const questions = questionArray.map((item, index) => {
    return <Question key={index} id={item} />;
  });

  console.log(questionArray);
  useEffect(() => {
    dispatch(updateQuestionListAction('Question1'));
  }, []);

  return <Box className={classes.root}>{questions}</Box>;
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(Body));

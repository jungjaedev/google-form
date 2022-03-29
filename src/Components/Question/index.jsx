import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import { menubarOffsetTop, updateMenubarOffsetTopAction, updateSelectedComponentAction, selectedComponent } from 'Data/manager';

import QuestionHeader from './QuestionHeader';
import QuestionBottom from './QuestionBottom';
import MultipleChoice from './QuestionTypes/MultipleChoice';
// import ShortAnswer from './QuestionTypes/ShortAnswer';
import LongAnswer from './QuestionTypes/LongAnswer';
// import CheckBox from './QuestionTypes/CheckBox';

function Question(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const topOffset = useSelector(menubarOffsetTop);
  const currentComponent = useSelector(selectedComponent);

  useEffect(() => {
    const elem = document.querySelector(`#${props.id}`);
    if (elem && topOffset === 0) {
      const rect = elem.getBoundingClientRect();
      dispatch(updateMenubarOffsetTopAction(rect.top));
    }
  }, [dispatch]);

  const handleClick = e => {
    let elem = document.querySelector(`#${props.id}`);
    let rect = elem.getBoundingClientRect();
    dispatch(updateMenubarOffsetTopAction(rect.top));
    dispatch(updateSelectedComponentAction(props.id));
  };

  const checkComponent =
    currentComponent === props.id ? `${classes.question} ${classes.selectedBox}` : `${classes.question} ${classes.unSelectedBox}`;

  return (
    <Box id={props.id} onClick={e => handleClick(e)} className={checkComponent}>
      <QuestionHeader />
      <MultipleChoice />
      <Divider style={{ marginTop: 30, width: '100%' }} />
      <QuestionBottom />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  question: theme.styles.Default.Box.question,
  unSelectedBox: theme.styles.Default.Box.unSelectedBox,
  selectedBox: theme.styles.Default.Box.selectedBox,
}));

export default withTheme(componentStyle(Question));

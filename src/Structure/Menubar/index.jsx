import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { menubarOffsetTop, questionList, updateQuestionListAction } from 'Data/manager';

function Menubar(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const topOffset = useSelector(menubarOffsetTop);
  const questionArray = useSelector(questionList);

  const addQuestion = () => {
    let numArray = [];
    let max = 0;
    questionArray.map((el, index) => {
      numArray.push(parseInt(el.slice(8)));
    });
    max = Math.max(...numArray) + 1;
    dispatch(updateQuestionListAction(`Question${max}`));
  };
  return (
    <Box
      onClick={() => addQuestion()}
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

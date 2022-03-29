import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Title from 'Components/TitleDesc/Title';
import Description from 'Components/TitleDesc/Description';

import { updateMenubarOffsetTopAction, updateSelectedComponentAction, selectedComponent } from 'Data/manager';

const ID = 'header';
function Header(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const currentComponent = useSelector(selectedComponent);

  const handleClick = e => {
    let elem = document.querySelector(`#${ID}`);
    let rect = elem.getBoundingClientRect();
    dispatch(updateMenubarOffsetTopAction(rect.top));
    dispatch(updateSelectedComponentAction(ID));
  };

  const checkComponent =
    currentComponent === ID ? `${classes.header} ${classes.selectedBox}` : `${classes.header} ${classes.unSelectedBox}`;
  return (
    <Box id={ID} onClick={e => handleClick(e)} className={checkComponent}>
      <Box className={classes.top} />
      <Title />
      <Description />
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  selectedBox: theme.styles.Default.Box.selectedBox,
  unSelectedBox: theme.styles.Default.Box.unSelectedBox,
  top: theme.styles.Default.Box.top,
  header: theme.styles.Default.Structure.header,
}));

export default withTheme(componentStyle(Header));

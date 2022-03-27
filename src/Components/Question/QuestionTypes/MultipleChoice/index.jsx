import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

function MultipleChoice(props) {
  const { classes } = props;
  const value = '';
  return (
    <Box className={classes.row}>
      <Box className={classes.radioBox}>
        <Radio style={{ paddingLeft: 0 }} />
      </Box>
      <Box className={classes.textBox}>
        <TextField className={`${classes.textField} ${classes.smallFont}`} />
      </Box>
      <Box className={classes.radioBox}>
        <Tooltip title="삭제">
          <IconButton aria-label="delete">
            <ClearOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
  textField: theme.styles.Default.TextField.root,
  smallFont: theme.styles.Default.TextField.smallFont,
  radioBox: theme.styles.Default.Box.radioBox,
  textBox: theme.styles.Default.Box.textBox,
}));

export default withTheme(componentStyle(MultipleChoice));

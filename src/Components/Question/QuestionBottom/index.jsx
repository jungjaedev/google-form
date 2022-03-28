import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';

import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
function QuestionBottom(props) {
  const { classes } = props;
  return (
    <Box className={classes.row}>
      <Grid item xs={8}></Grid>
      <Grid item xs={1}>
        <IconButton>
          <LibraryBooksOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Grid>
      <Divider orientation="vertical" />
      <Grid item xs={2}>
        필수
        <Switch
          disableRipple
          //   root: classes.root,
          // switchBase: classes.switchBase,
          // thumb: classes.thumb,
          // track: classes.track,
          // checked: classes.checked,
          style={{
            color: '#673ab7',
            '&$checked': {
              color: '#673ab7',
            },
            '&$checked + $track': {
              backgroundColor: '#673ab7',
            },
          }}
        />
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  // question: theme.styles.Default.Box.question,
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(QuestionBottom));

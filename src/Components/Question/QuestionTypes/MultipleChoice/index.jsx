import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

function MultipleChoice(props) {
  const { classes } = props;
  const value = '';
  return (
    <Box className={classes.root}>
      <form>
        <FormControl>
          <RadioGroup aria-label="quiz" name="quiz" value={value}>
            <FormControlLabel disabled value="worst" label={<TextField />} control={<Radio />} />
          </RadioGroup>
        </FormControl>
      </form>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(MultipleChoice));

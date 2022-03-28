import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Input from '@material-ui/core/Input';

import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function QuestionHeader(props) {
  const { classes } = props;
  const questions = {
    1: {
      id: 1,
      display_name: '단답형',
      name: 'ShortAnswer',
      icon: <ShortTextIcon />,
    },
    2: {
      id: 2,
      display_name: '장문형',
      name: 'LongAnswer',
      icon: <SubjectIcon />,
    },
    3: {
      id: 3,
      display_name: '객관식',
      name: 'MultipleChoice',
      icon: <RadioButtonCheckedIcon />,
    },
    4: {
      id: 4,
      display_name: '체크박스',
      name: 'CheckBox',
      icon: <CheckBoxIcon />,
    },
    5: {
      id: 5,
      display_name: '드롭다운',
      name: 'Dropdown',
      icon: <ArrowDropDownCircleIcon />,
    },
  };
  return (
    <Box className={classes.root}>
      <Grid item xs={8}>
        <TextField className={classes.textfield} required placeholder="질문" variant="filled" />
      </Grid>
      <Grid item xs={4}>
        <Select
          // style={{ width: '90%', height: 50 }}
          // value={personName}
          // onChange={handleChange}
          // input={<Input />}
          // renderValue={selected => selected.join(', ')}
          variant="outlined"
          defaultValue={questions[3].name}
          // MenuProps={MenuProps}
        >
          {Object.values(questions).map(question => (
            <MenuItem key={question.id} value={question.name}>
              <Box className={classes.row} style={{ height: 10 }}>
                <ListItemIcon>{question.icon}</ListItemIcon>
                <ListItemText primary={question.display_name} />
              </Box>
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  row: theme.styles.Default.Box.row,
  textfield: theme.styles.Default.TextField.root,
}));

export default withTheme(componentStyle(QuestionHeader));

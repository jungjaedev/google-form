import { ColorThemes } from 'Theme/ColorThemes';

import { createTheme } from '@material-ui/core';
import { typography } from './Typography';
import { styles } from './Styles';

export const theme = createTheme({
  styles: styles,
  typography: typography,
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: `${ColorThemes.gray}`,
        },
        '&:after': {
          borderBottomColor: `${ColorThemes.purple}`,
        },
        '&:hover:not($disabled):before': {
          borderBottom: `1px solid ${ColorThemes.gray}`,
        },
      },
    },
  },
});

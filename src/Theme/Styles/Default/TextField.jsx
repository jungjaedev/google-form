import { ColorThemes } from '../../ColorThemes';

export const TextField = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    '& .MuiInput-underline:after': {
      borderBottomColor: `${ColorThemes.purple}`,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: `${ColorThemes.gray}`,
    },
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 14,
  },
};

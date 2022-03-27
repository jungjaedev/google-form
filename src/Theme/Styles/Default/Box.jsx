import { ColorThemes } from '../../ColorThemes';

export const Box = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
  },
  question: {
    width: '80%',
    display: 'flex',
    height: 'auto',
    backgroundColor: ColorThemes.white,
    flexDirection: 'column',
  },
  selectedBox: {
    backgroundColor: 'black',
    borderLeft: `8px solid ${ColorThemes.blue}`,
  },
};

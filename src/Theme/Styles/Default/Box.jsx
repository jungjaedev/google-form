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
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px auto 0 auto',
    padding: '22px 20px 24px 20px',
    backgroundColor: ColorThemes.white,
    borderRadius: '8px',
    borderLeft: `8px solid ${ColorThemes.white}`,
  },
  selectedBox: {
    backgroundColor: 'black',
    borderLeft: `8px solid ${ColorThemes.blue}`,
  },
};

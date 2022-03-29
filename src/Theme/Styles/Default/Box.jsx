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
    borderLeft: `8px solid ${ColorThemes.blue}`,
  },
  unSelectedBox: {
    borderLeft: `8px solid ${ColorThemes.white}`,
  },
  top: {
    left: '-8px',
    top: 0,
    position: 'absolute',
    width: `calc(100% + 8px)`,
    height: `8px`,
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    backgroundColor: ColorThemes.purple,
  },
  row: {
    display: 'flex',
    height: 40,
    padding: '8px 0',
    alignItems: 'center',
    width: '100%',
  },
  radioBox: {
    width: 30,
    height: 'auto',
  },
  textBox: {
    width: '90%',
    height: 'auto',
  },
};

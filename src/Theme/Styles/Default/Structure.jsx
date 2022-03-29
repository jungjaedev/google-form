import { ColorThemes } from '../../ColorThemes';

export const Structure = {
  page: {
    display: 'flex',
    flexWrap: 'Wrap',
    width: '100%',
    height: '100vh',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    backgroundColor: ColorThemes.background,
  },

  header: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 'auto',
    width: '80%',
    alignItems: 'center',
    margin: '20px auto 0',
    padding: '22px 20px 24px 20px',
    backgroundColor: ColorThemes.white,
    borderRadius: '8px',
    position: 'relative',
  },

  // body: {
  //   display: 'flex',
  //   flexWrap: 'noWrap',
  //   height: '80vh',
  //   width: '100%',
  //   background: ColorThemes.white,
  // },
};

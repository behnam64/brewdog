import { createTheme } from '@mui/material';
import { muiComponents } from '@src/styles/muiComponents';
import { ThemeEnum } from '@src/types/themeType';

export const muiLightTheme = () => {
  return createTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
      fontFamily: 'IRANYekan',
    },
    palette: {
      mode: ThemeEnum.light,
      text: {
        primary: '#252525',
        secondary: '#454545',
      },
      background: {
        default: '#F7F8FF',
        paper: '#fff',
      },
      primary: {
        main: '#7983FF',
        dark: '#3D4280',
        light: '#BCC1FF',
        400: '#DEE0FF',
        300: '#EFF0FF',
      },
      secondary: {
        main: '#B388EB',
      },
    },
    components: muiComponents,
  });
};

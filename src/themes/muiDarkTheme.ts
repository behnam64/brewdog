import { createTheme } from '@mui/material';
import { muiComponents } from '@src/styles/muiComponents';
import { ThemeEnum } from '@src/types/themeType';

export const muiDarkTheme = () => {
  return createTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
      fontFamily: 'IRANYekan',
    },
    palette: {
      mode: ThemeEnum.dark,
      text: {
        primary: '#F5F5F5',
        secondary: '#DADADA',
      },
      common: {
        black: '#252525',
      },
      background: {
        default: '#121212',
        paper: '#101010',
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
      error: {
        main: '#F05D74',
      },
      success: {
        main: '#4EC399',
      },
    },
    components: muiComponents,
  });
};

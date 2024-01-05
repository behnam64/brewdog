import { Components, Theme } from '@mui/material';

export const muiComponents: Components<Omit<Theme, 'components'>> | undefined = {
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      '*': {
        textAlign: 'left',
        fontFamily: 'IRANYekan',
      },
      html: {
        fontSize: '16px',
        colorScheme: theme.palette.mode,
      },
      body: {
        padding: '0 !important',
        overflowY: 'scroll',
      },
      '.MuiSkeleton-root': {
        background:
          theme.palette.mode === 'light' ? 'rgba(0,0,0,0.11) !important' : 'rgba(256,256,256,0.11) !important',
      },
      '.notistack-MuiContent': {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '20rem',
        '& > div:last-of-type': {
          padding: '0',
          margin: '0',
          marginLeft: '1.5rem',
          marginRight: '-0.5rem',
        },
      },
    }),
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: 0,
        padding: '0.375rem 1rem',
        borderRadius: '0.25rem',
      },
      startIcon: {
        marginLeft: '0',
        marginRight: '0.5rem',
      },
      endIcon: {
        marginRight: '0',
        marginLeft: '0.5rem',
      },
    },
  },
};

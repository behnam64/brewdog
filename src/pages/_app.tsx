import '@src/styles/globals.scss';
import type { AppProps } from 'next/app';
import { DefaultOptions, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, useTheme } from 'next-themes';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { muiLightTheme } from '@src/themes/muiLightTheme';
import { muiDarkTheme } from '@src/themes/muiDarkTheme';
import { SnackbarProvider } from 'notistack';
import { useMemo } from 'react';
import { ThemeEnum } from '@src/types/themeType';

export default function App(appProps: AppProps) {
  const queryClientOptions: DefaultOptions<unknown> | undefined = useMemo(() => {
    return {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        retry: 0,
      },
    };
  }, []);

  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: queryClientOptions,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={appProps.pageProps.dehydratedState}>
        <ThemeProvider storageKey='theme' defaultTheme={ThemeEnum.system}>
          <App2 appProps={appProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

const App2 = (props: { appProps: AppProps }) => {
  const { theme, systemTheme } = useTheme();

  const muiTheme = useMemo(() => {
    if (theme === ThemeEnum.light) {
      return muiLightTheme();
    } else if (theme === ThemeEnum.dark) {
      return muiDarkTheme();
    } else {
      if (systemTheme === ThemeEnum.light) {
        return muiLightTheme();
      } else {
        return muiDarkTheme();
      }
    }
  }, [theme, systemTheme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={4}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <props.appProps.Component {...props.appProps.pageProps} />
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

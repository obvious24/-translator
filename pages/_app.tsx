import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { ReactElement, useEffect } from 'react';
import generalTheme from '../components/theme/generalTheme';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={generalTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

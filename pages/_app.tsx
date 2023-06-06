import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Provider } from 'react-redux';
import createEmotionCache from '../components/createEmotionCache';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darkTheme';
import { persistStore } from 'redux-persist'
import { store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import i18n from "../i18n";
import Cookies from 'js-cookie';
import { defaultLanguaje } from '../config';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

let persistor = persistStore(store);

export default function MyApp(props: MyAppProps) {

  const [activeTheme, setActiveTheme] = React.useState(darkTheme);
  const [selectedTheme, setSelectedTheme] = React.useState<'light' | 'dark'>('light');

  const language = Cookies.get("languageMarathon");
  i18n.changeLanguage(language || defaultLanguaje);

  if (!language) {
    Cookies.set("languageMarathon", defaultLanguaje, { expires: 7 });
  }

  function getActiveTheme(themeMode: 'light' | 'dark') {
    return themeMode === 'dark' ? darkTheme : lightTheme;
  }

  React.useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme]);

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    console.log('entroeee');
    console.log(selectedTheme);


    const desiredTheme = selectedTheme === 'dark' ? 'light' : 'dark';

    setSelectedTheme(desiredTheme);
  };


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />

              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.facebook.com/Havana-Skate-Marathon-103558919175836" />
              <meta property="og:title" content="Havana Skate Marathon 2022" />
              <meta property="og:description" content="Havana Skate Marathon 2022" />
              <meta property="og:image" content="https://www.havanaskatemarathon.com/logo.png" />


              <meta name="keywords" content="havana, skate , marathon"/>
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://www.havanaskatemarathon.com/" />
              <meta property="twitter:title" content="Havana Skate Marathon 2022" />
              <meta property="twitter:description" content="Havana Skate Marathon 2022" />
              <meta property="twitter:image" content="https://www.havanaskatemarathon.com/logo.png"></meta>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

            </Head>
            <ThemeProvider theme={activeTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} toggleTheme={toggleTheme} />
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>

      </Provider>
    </LocalizationProvider>
  );
}

import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import useSWR from 'swr';
import en from '../lang/en.json';
import es_ES from '../lang/es-ES.json';

const fetcher = (url) => fetch(url).then((res) => res.json());

const AppContext = createContext();

const messages = {
  en,
  'es-ES': es_ES,
};

export function AppWrapper({ children }) {
  //process.env.API_DATA_PATH

  const { locale } = useRouter();
  const { data, error } = useSWR('/api/data', fetcher);
  const theme = data && JSON.parse(data);
  //console.log(theme['colorPalette']);

  return (
    <AppContext.Provider value={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../lang/en.json';
import es_ES from '../lang/es-ES.json';

const AppContext = createContext();

const messages = {
  en,
  'es-ES': es_ES,
};

export function AppWrapper({ children }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

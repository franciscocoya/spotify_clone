import '../styles/global.scss';

import { Poppins } from '@next/font/google';

const roboto = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

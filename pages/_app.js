import { AppWrapper } from '@context/state';
import { DebugObserver } from '@hooks/useRecoilObserver';
import { Poppins } from '@next/font/google';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import '../styles/global.scss';

const roboto = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
});

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <AppWrapper>
      <RecoilRoot>
        <DebugObserver />
        <div className={`${roboto.className} root-container`}>
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </AppWrapper>
  );
}

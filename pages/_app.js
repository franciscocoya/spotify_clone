import { AppWrapper } from '@context/state';
import { DebugObserver } from '@hooks/useRecoilObserver';
import { Poppins } from '@next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RecoilRoot } from 'recoil';

import '../styles/global.scss';

const roboto = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
});

export default function App({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <AppWrapper>
      <RecoilRoot>
        <DebugObserver />
        {/* <AuthProvider> */}
        {/* <ProtectedRoute> */}
        <div className={`${roboto.className} root-container`}>
          <Component {...pageProps} />
        </div>
        {/* </ProtectedRoute> */}
        {/* </AuthProvider> */}
      </RecoilRoot>
    </AppWrapper>
  );
}

import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import variables from '@styles/variables.module.scss';
import axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const currentColor = 'rgb(24, 208, 96)';

  const getAllSongs = async () => {
    await axios.get('/api/song').then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <>
      <Head>
        <title>Home - Spotify</title>
      </Head>

      <BaseLayout>
        <div className="section-gradient"></div>
        <div>
          <p>Hola</p>
        </div>
      </BaseLayout>
      <style jsx>{`
        .section-gradient {
          width: 100vw;
          height: 400px;
          background: ${currentColor};
          background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%),
            ${variables.gradientNoise};
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
      `}</style>
    </>
  );
}

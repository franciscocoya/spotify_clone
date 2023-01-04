import Head from 'next/head';
import Link from 'next/link';
import styles from './404.module.scss';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página no encontrada - Spotify</title>
      </Head>
      <main className={`${styles.main} full-page`}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link href="/">Volver a inicio</Link>
      </main>
    </>
  );
}

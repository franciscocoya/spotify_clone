import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Spotify</title>
      </Head>
      <main className={styles.main}>
        <p>Home page</p>
      </main>
    </>
  );
}

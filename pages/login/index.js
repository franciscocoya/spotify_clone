import Head from 'next/head';
import Logo from '../../components/images/Logo';
import styles from './Login.module.scss';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Spotify</title>
      </Head>
      <main className={styles.main}>
        <Logo width="182px" />
        <p>Login</p>
      </main>
    </>
  );
}

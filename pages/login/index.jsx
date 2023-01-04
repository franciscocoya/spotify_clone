import Head from 'next/head';
import LoginForm from '../../components/forms/loginForm/LoginForm';
import Logo from '../../components/images/Logo';

import styles from './Login.module.scss';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Spotify</title>
      </Head>
      <main className={`${styles.main} full-page`}>
        <Logo width="182px" className={styles.logo} />
        <p>Login</p>
        <LoginForm />
      </main>
    </>
  );
}

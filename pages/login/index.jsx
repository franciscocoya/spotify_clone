import BaseMessage from '@components/BaseMessage';
import BaseButton from '@components/buttons/BaseButton';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import Logo from '@components/Images/Logo';
import TextInput from '@components/Inputs/textInput/TextInput';
import { AuthContext } from '@context/authContext';
import { login } from '@lib/auth';
import variables from '@styles/variables.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './Login.module.scss';

function Login() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const intl = useIntl();
  const authContext = useContext(AuthContext);

  const signIn = async (e) => {
    e.preventDefault();
    await login(
      e.target.email.value,
      e.target.password.value,
      (data, isLogged) => {
        if (data && isLogged) {
          authContext.setToken(crypto.randomUUID());
          router.push('/');
        }
      }
    );
  };

  return (
    <>
      <Head>
        <title>Login - Spotify</title>
      </Head>
      <main className={`${styles.main} full-page`}>
        <Logo width="182px" className={styles.logo} />
        <BaseForm onSubmit={signIn} method="POST">
          <TextInput
            name="email"
            required={true}
            type="text"
            autoFocus={true}
            label={intl.formatMessage({ id: 'page.login.email' })}
            placeholder={intl.formatMessage({ id: 'page.login.email' })}
          />
          <TextInput
            required={true}
            name="password"
            type="password"
            label={intl.formatMessage({ id: 'page.login.password' })}
            placeholder={intl.formatMessage({ id: 'page.login.password' })}
          />
          {/* Login button */}
          <BaseButton
            type="submit"
            text={intl.formatMessage({ id: 'components.buttons.login' })}
            style="solid"
            color={variables.primaryColorEmphasis}
            rounded
          />
          <p className={styles.createAccountTag}>
            {intl.formatMessage({ id: 'page.login.create_account_label' })}
          </p>
          {/* SignUp button */}
          <BaseButton
            type="button"
            text={intl.formatMessage({ id: 'components.buttons.signUp_login' })}
            style="outlined"
            color={variables.whiteColor}
            rounded
            action={() => router.push('/signup')}
          />
          {error && <BaseMessage content={error} type="error" />}
        </BaseForm>
      </main>
    </>
  );
}

export default Login;

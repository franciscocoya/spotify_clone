import BaseButton from '@components/buttons/BaseButton';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import Logo from '@components/Images/Logo';
import TextInput from '@components/Inputs/textInput/TextInput';
import Head from 'next/head';
import { useIntl } from "react-intl";
import styles from './Login.module.scss';
export default function Login() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>Login - Spotify</title>
      </Head>
      <main className={`${styles.main} full-page`}>
        <Logo width="182px" className={styles.logo} />
        <BaseForm>
          <TextInput
            required={true}
            type="text"
            autoFocus={true}
            label={intl.formatMessage({ id: "page.login.email" })}
            placeholder={intl.formatMessage({ id: "page.login.email" })}
          />
          <TextInput
            required={true}
            type="password"
            label={intl.formatMessage({ id: "page.login.password" })}
            placeholder={intl.formatMessage({ id: "page.login.password" })}
          />
          <BaseButton text="Log In" style="solid" />
        </BaseForm>
      </main>
    </>
  );
}

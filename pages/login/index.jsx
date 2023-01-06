import BaseButton from '@components/buttons/BaseButton';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import Logo from '@components/Images/Logo';
import TextInput from '@components/Inputs/textInput/TextInput';
import prisma from '@lib/prisma';
import variables from '@styles/variables.module.scss';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import styles from './Login.module.scss';

function Login({ users }) {
  const intl = useIntl();

  console.log(users);

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
            label={intl.formatMessage({ id: 'page.login.email' })}
            placeholder={intl.formatMessage({ id: 'page.login.email' })}
          />
          <TextInput
            required={true}
            type="password"
            label={intl.formatMessage({ id: 'page.login.password' })}
            placeholder={intl.formatMessage({ id: 'page.login.password' })}
          />
          <BaseButton text={intl.formatMessage({ id: 'components.buttons.login' })} style="solid" color={variables.primaryColorEmphasis} rounded />
        </BaseForm>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: { users }
  }
}

export default Login
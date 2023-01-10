import BaseButton from '@components/buttons/BaseButton';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import Logo from '@components/Images/Logo';
import TextInput from '@components/Inputs/textInput/TextInput';
//import og from '@lib/og';
import variables from '@styles/variables.module.scss';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './SignUp.module.scss';

function SignUp() {
  const intl = useIntl();
  const router = useRouter();

  const createAccount = async (e) => {
    e.preventDefault();

    await axios.post('/api/auth/signup', {
      username: e.target.username,
      email: e.target.email.value,
      password: e.target.password.value,
    })
      .then((res) => {
        console.log(res);
        /* Redirect to Home page */
        //router.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Head>
        <title>SignUp - Spotify</title>
        {/* {og({ title: 'Create an account on Spotify' })} */}
      </Head>
      <main className={`${styles.main} full-page`}>
        <Logo width="182px" className={styles.logo} />
        <BaseForm onSubmit={createAccount} method="POST">
          <TextInput
            name="email"
            required={true}
            type="text"
            autoFocus={true}
            label={intl.formatMessage({ id: 'page.signup.email' })}
            placeholder={intl.formatMessage({ id: 'page.signup.email_placeholder' })}
          />
          <TextInput
            name="emailConfirmation"
            required={true}
            type="text"
            label={intl.formatMessage({ id: 'page.signup.confirmEmail' })}
            placeholder={intl.formatMessage({ id: 'page.signup.confirmEmail_placeholder' })}
          />
          <TextInput
            required={true}
            name="password"
            type="password"
            label={intl.formatMessage({ id: 'page.signup.createPassword' })}
            placeholder={intl.formatMessage({ id: 'page.signup.createPassword_placeholder' })}
          />
          <TextInput
            required={true}
            name="username"
            type="text"
            label={intl.formatMessage({ id: 'page.signup.username' })}
            placeholder={intl.formatMessage({ id: 'page.signup.username_placeholder' })}
          />
          <span>{intl.formatMessage({ id: 'page.signup.username_msg' })}</span>

          {/* SignUp button */}
          <BaseButton
            type="submit"
            text={intl.formatMessage({ id: 'components.buttons.signUp' })}
            style="solid"
            color={variables.primaryColorEmphasis}
            rounded
          />
        </BaseForm>

        <div className={styles.login_section}>
          <p className={styles.createAccountTag}>{intl.formatMessage({ id: 'page.login.create_account_label' })}</p>
          {/* SignUp button */}
          <BaseButton
            type="button"
            text={intl.formatMessage({ id: 'components.buttons.login' })}
            style="text"
            color={variables.whiteColor}
            rounded
            action={() => router.push('/login')}
          />
        </div>


      </main>
    </>
  );
}

export default SignUp;

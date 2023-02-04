import BaseButton from '@components/buttons/BaseButton';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import Logo from '@components/Images/Logo';
import TextInput from '@components/Inputs/textInput/TextInput';
//import og from '@lib/og';
import { createAccount as signUp } from '@lib/auth';
import {
  primaryColorEmphasis,
  whiteColor,
} from '@styles/variables.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './SignUp.module.scss';

function SignUp() {
  const intl = useIntl();
  const router = useRouter();

  const createAccount = async (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      emailConfirmation: e.target.emailConfirmation.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value,
      username: e.target.username.value,
    };
    await signUp(payload);
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
          {/* email */}
          <TextInput
            name="email"
            required={true}
            type="text"
            autoFocus={true}
            label={intl.formatMessage({ id: 'page.signup.email' })}
            placeholder={intl.formatMessage({
              id: 'page.signup.email_placeholder',
            })}
          />
          {/* Email confirmation */}
          <TextInput
            name="emailConfirmation"
            required={true}
            type="text"
            label={intl.formatMessage({ id: 'page.signup.confirmEmail' })}
            placeholder={intl.formatMessage({
              id: 'page.signup.confirmEmail_placeholder',
            })}
          />
          {/* Password */}
          <TextInput
            required={true}
            name="password"
            type="password"
            label={intl.formatMessage({ id: 'page.signup.createPassword' })}
            placeholder={intl.formatMessage({
              id: 'page.signup.createPassword_placeholder',
            })}
          />
          {/* Password confirmation */}
          <TextInput
            required={true}
            name="passwordConfirmation"
            type="password"
            label={intl.formatMessage({ id: 'page.signup.confirmPassword' })}
            placeholder={intl.formatMessage({
              id: 'page.signup.createPassword_placeholder',
            })}
          />
          {/* Username */}
          <TextInput
            required={true}
            name="username"
            type="text"
            label={intl.formatMessage({ id: 'page.signup.username' })}
            placeholder={intl.formatMessage({
              id: 'page.signup.username_placeholder',
            })}
          />
          <span>{intl.formatMessage({ id: 'page.signup.username_msg' })}</span>

          {/* SignUp button */}
          <BaseButton
            type="submit"
            text={intl.formatMessage({ id: 'components.buttons.signUp' })}
            style="solid"
            color={primaryColorEmphasis}
            rounded
          />
        </BaseForm>

        <div className={styles.login_section}>
          <p className={styles.createAccountTag}>
            {intl.formatMessage({ id: 'page.login.create_account_label' })}
          </p>
          {/* SignUp button */}
          <BaseButton
            type="button"
            text={intl.formatMessage({ id: 'components.buttons.login' })}
            style="text"
            color={whiteColor}
            rounded
            action={() => router.push('/login')}
          />
        </div>
      </main>
    </>
  );
}

export default SignUp;

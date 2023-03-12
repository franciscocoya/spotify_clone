import BaseButton from '@/components/buttons/BaseButton';
import BaseForm from '@/components/Forms/BaseForm/BaseForm';
import TextInput from '@/components/inputs/textInput/TextInput';
import { whiteColor } from '@/styles/variables.module.scss';
import { useIntl } from 'react-intl';

function ArtistLogin({ ...props }) {
  const intl = useIntl();
  return (
    <>
      <section className="artist-login-container">
        <h2>Login with your artist account</h2>
        <BaseForm onSubmit={null}>
          <TextInput
            name="email"
            required={true}
            type="text"
            autoFocus={true}
            label={intl.formatMessage({ id: 'page.login.email' })}
            placeholder={intl.formatMessage({ id: 'page.login.email' })}
          />
          <TextInput
            name="password"
            required={true}
            type="password"
            autoFocus={true}
            label={intl.formatMessage({ id: 'page.login.password' })}
            placeholder={intl.formatMessage({ id: 'page.login.password' })}
          />
          <BaseButton
            type="button"
            text={intl.formatMessage({ id: 'components.buttons.signUp_login' })}
            style="outlined"
            color={whiteColor}
            rounded
            action={() => router.push('/signup')}
          />
        </BaseForm>
      </section>
      <style jsx>{`
        .artist-login-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
      `}</style>
    </>
  );
}

export default ArtistLogin;

import BaseButton from '@/components/buttons/BaseButton';
import BaseDragAndDropArea from '@/components/dragAndDrop/BaseDragAndDropArea';
import BaseForm from '@/components/Forms/BaseForm/BaseForm';
import TextAreaInput from '@/components/inputs/textArea/TextAreaInput';
import TextInput from '@/components/Inputs/textInput/TextInput';
import useArtistAuth from '@/hooks/artist/useArtistAuth';

import {
  blackColorTransparent,
  errorColor,
  primaryColorEmphasis,
  whiteColor
} from '@/styles/variables.module.scss';
import { prettySize } from '@/utils/stringUtil';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useIntl } from 'react-intl';

function CreateArtistAccount() {
  const intl = useIntl();
  const router = useRouter();
  const [showRemoveBanner, setShowRemoveBanner] = useState(false);

  const {
    handleName,
    handleEmail,
    handlePassword,
    handleBio,
    handleConfirmPassword,
    createArtistAccount,
    allowDrop,
    handleDropBanner,
    handleBannerInputChange,
    loading,
    pageBanner,
    removeCurrentBanner,
  } = useArtistAuth();

  const createAccount = async (e) => {
    e.preventDefault();
    await createArtistAccount();
  };

  return (
    <>
      <Head>
        <title>Create an artist account - Spotify</title>
        {/* {og({ title: 'Create an account on Spotify' })} */}
      </Head>
      <main className="artist-create-account__wrapper">
        <h1>{intl.formatMessage({ id: 'page.artist.createAccount.title' })}</h1>
        <BaseForm onSubmit={createAccount} method="POST">
          <div className="artist-create-account__wrapper--overlay">
            {/* Artist / Band name */}
            <TextInput
              name="name"
              required={true}
              type="text"
              autoFocus={true}
              label={intl.formatMessage({
                id: 'page.artist.createAccount.name',
              })}
              placeholder={intl.formatMessage({
                id: 'page.artist.createAccount.name_placeholder',
              })}
              light={true}
              handleInput={handleName}
              errorMessage={null}
            />
            {/* Email */}
            <TextInput
              name="emailConfirmation"
              required={true}
              type="email"
              label={intl.formatMessage({
                id: 'page.artist.createAccount.email',
              })}
              placeholder={intl.formatMessage({
                id: 'page.artist.createAccount.email_placeholder',
              })}
              light={true}
              handleInput={handleEmail}
              errorMessage={null}
            />

            {/* Password */}
            <TextInput
              required={true}
              name="password"
              type="password"
              label={intl.formatMessage({
                id: 'page.artist.createAccount.password',
              })}
              placeholder={intl.formatMessage({
                id: 'page.artist.createAccount.password_placeholder',
              })}
              light={true}
              handleInput={handlePassword}
              errorMessage={null}
            />

            {/* Password confirmation */}
            <TextInput
              required={true}
              name="passwordConfirmation"
              type="password"
              label={intl.formatMessage({
                id: 'page.artist.createAccount.passwordConfirmation',
              })}
              placeholder={intl.formatMessage({
                id: 'page.artist.createAccount.passwordConfirmation_placeholder',
              })}
              light={true}
              handleInput={handleConfirmPassword}
              errorMessage={null}
            />
            {/* Artist biography */}
            <TextAreaInput
              label={intl.formatMessage({
                id: 'page.artist.createAccount.biography',
              })}
              placeholder={intl.formatMessage({
                id: 'page.artist.createAccount.biography_placeholder',
              })}
              light={true}
              handleInput={handleBio}
              isRequired={false}
            />
          </div>

          <div className="artist-banner-container">
            <label htmlFor="artist-banner">
              {intl.formatMessage({
                id: 'page.artist.createAccount.banner.dragAndDrop.title',
              })}
            </label>
            <BaseDragAndDropArea
              id="artist-banner-create-account"
              name="artist-banner"
              allowedFormats="jpeg, png, webp, svg"
              accept=".jpg, .png, .webp, .svg"
              text={intl.formatMessage({
                id: 'page.artist.createAccount.banner.dragAndDrop.info',
              })}
              handleChange={handleBannerInputChange}
              drop={handleDropBanner}
              allowDrop={allowDrop}
              dropCompleted={null}
              error={null}
              dropCompletedMessage={''}
              styles={{
                width: '100%',
              }}
            />
            {pageBanner && (
              <div className="selected-banner-container">
                {showRemoveBanner ? (
                  <FaTimesCircle
                    size={24}
                    fill={errorColor}
                    onMouseLeave={(e) => setShowRemoveBanner(false)}
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={removeCurrentBanner}
                  />
                ) : (
                  <FaCheckCircle
                    size={24}
                    fill={primaryColorEmphasis}
                    onMouseEnter={(e) => setShowRemoveBanner(true)}
                  />
                )}
                <span>
                  {pageBanner?.name} · {prettySize(pageBanner?.size)}
                </span>
              </div>
            )}
          </div>

          {/* SignUp button */}
          <BaseButton
            type="submit"
            text={intl.formatMessage({ id: 'components.buttons.signUp' })}
            style="solid"
            color={primaryColorEmphasis}
            rounded
            isLoading={loading}
          />
        </BaseForm>

        <div className="">
          <p className="">
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
      <style jsx>{`
        .artist-create-account__wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
          background-color: ${blackColorTransparent};
          background-image: url('/images/artist_account_background.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          backdrop-filter: opacity(20%);
          background-attachment: fixed;
          padding: 50px;
        }

        .artist-create-account__wrapper > h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .artist-create-account__wrapper--overlay {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
          background-color: ${blackColorTransparent};
          padding: 30px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .artist-create-account__wrapper--overlay input:placeholder {
          color: white;
        }

        .artist-banner-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
        }

        .artist-banner-container > label {
          width: 100%;
          background-color: ${blackColorTransparent};
          padding: 10px 20px;
          border-radius: 5px;
        }

        .selected-banner-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
        }
      `}</style>
    </>
  );
}

export default CreateArtistAccount;

import BaseButton from '@components/buttons/BaseButton';
import BaseDragAndDropArea from '@components/dragAndDrop/BaseDragAndDropArea';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import BaseComboBox from '@components/inputs/comboBox/BaseComboBox';
import TextInput from '@components/inputs/textInput/TextInput';
import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@components/layouts/MetadataLayout';
import variables from '@styles/variables.module.scss';
import { useIntl } from 'react-intl';

function UploadTrackPage({ ...props }) {
  const intl = useIntl();
  return (
    <>
      <MetadataLayout
        title={intl.formatMessage({ id: 'page.upload.metadata.title' })}
      />
      <BaseLayout showGradient={true} currentColor={'#ff006e'}>
        <h1>{intl.formatMessage({ id: 'page.upload.title' })}</h1>
        <section className="upload-container__wrapper">
          <div className="upload-preview-cover">
            <BaseDragAndDropArea />
          </div>
          <BaseForm className="upload-form">
            {/* Track title */}
            <TextInput
              name="title"
              required={true}
              type="text"
              autoFocus={true}
              label={intl.formatMessage({ id: 'page.upload.form.title' })}
              placeholder={intl.formatMessage({
                id: 'page.upload.form.title.placeholder',
              })}
            />
            {/* Track Genre */}
            <TextInput
              name="genre"
              required={true}
              type="text"
              autoFocus={true}
              label={intl.formatMessage({ id: 'page.upload.form.genre' })}
              placeholder={intl.formatMessage({
                id: 'page.upload.form.genre.placeholder',
              })}
            />
            <BaseComboBox
              label={intl.formatMessage({ id: 'page.upload.form.genre' })}
            />

            {/* Track Album */}
            <TextInput
              name="album"
              required={true}
              type="text"
              autoFocus={true}
              label={intl.formatMessage({ id: 'page.upload.form.album' })}
              placeholder={intl.formatMessage({
                id: 'page.upload.form.album.placeholder',
              })}
            />
            {/* Upload track button */}
            <div className="upload-track-form__upload-button-container">
              <BaseButton
                type="submit"
                text={intl.formatMessage({
                  id: 'components.buttons.uploadTrack',
                })}
                style="solid"
                color={variables.primaryColorEmphasis}
                rounded
                action={null}
              />
            </div>
          </BaseForm>
        </section>
      </BaseLayout>
      <style jsx>{`
        h1 {
          text-align: center;
          margin-bottom: 50px;
        }

        .upload-container__wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 0 30px;
        }

        .upload-track-form__upload-button-container {
          width: 100%;
          text-align: right;
        }
      `}</style>
    </>
  );
}

export default UploadTrackPage;

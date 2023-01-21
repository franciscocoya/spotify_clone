import BaseButton from '@components/buttons/BaseButton';
import UploadTrackPreviewCard from '@components/cards/UploadTrackPrevierwCard';
import BaseDragAndDropArea from '@components/dragAndDrop/BaseDragAndDropArea';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import BaseComboBox from '@components/inputs/comboBox/BaseComboBox';
import BaseRadioButton from '@components/inputs/radioButton/BaseRadioButton';
import TextInput from '@components/inputs/textInput/TextInput';
import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@components/layouts/MetadataLayout';
import useUploadTrack from '@hooks/tracks/useUploadTrack';
import { primaryColorEmphasis } from '@styles/variables.module.scss';
import { prettyDuration } from '@utils/stringUtil';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

function UploadTrackPage({ ...props }) {
  const intl = useIntl();
  const [genres, setGenres] = useState();
  const {
    handleUploadTrackCover,
    handleUploadTrackFile,
    selectedCover,
    changeTrackTitlePreview,
    trackToUpload,
    handleUpload,
    handleSelectGenre,
    handleSelectIsExplicitContent,
    dropCover,
    allowDrop,
    dropAudio,
    trackUploadCompleted,
    coverUploadCompleted,
    coverUploadError,
    trackUploadError,
  } = useUploadTrack();

  useEffect(() => {
    const loadGenres = async () => {
      const data = await fetch('/api/staticdata').then((res) => res.json());
      setGenres(data);
    };
    loadGenres();
  }, [genres]);

  return (
    <>
      <MetadataLayout
        title={intl.formatMessage({ id: 'page.upload.metadata.title' })}
      />
      <BaseLayout showGradient={false} currentColor={'#ff006e'}>
        <h1>{intl.formatMessage({ id: 'page.upload.title' })}</h1>
        <section className="upload-container__wrapper">
          <div className="upload-preview-cover">
            <UploadTrackPreviewCard
              cover={selectedCover && URL.createObjectURL(selectedCover)}
              duration={trackToUpload && prettyDuration(trackToUpload.duration)}
            />
            <BaseDragAndDropArea
              text={intl.formatMessage({
                id: 'page.upload.dragAndDrop.cover.text',
              })}
              allowedFormats="jpeg, png, webp, svg"
              accept=".jpg, .png, .webp, .svg"
              name="track-upload-cover"
              id="track-upload-cover"
              handleChange={handleUploadTrackCover}
              drop={dropCover}
              allowDrop={allowDrop}
              dropCompleted={coverUploadCompleted}
              error={coverUploadError}
              dropCompletedMessage={
                coverUploadError
                  ? intl.formatMessage({
                      id: 'components.dragAndDrop.area.cover.message.error',
                    })
                  : intl.formatMessage({
                      id: 'components.dragAndDrop.area.cover.message.complete',
                    })
              }
            />
          </div>
          <BaseForm
            className="upload-form"
            style={{
              justifyContent: 'space-between',
            }}
            onSubmit={handleUpload}
          >
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
              handleInput={changeTrackTitlePreview}
              maxLength={40}
            />
            {/* Track Genre */}
            <BaseComboBox
              label={intl.formatMessage({ id: 'page.upload.form.genre' })}
              options={genres && JSON.parse(genres)}
              isGrouped={true}
              placeholder={intl.formatMessage({
                id: 'page.upload.form.genre.placeholder',
              })}
              name="genre"
              handleSelect={handleSelectGenre}
            />
            {}

            {/* Track Album */}
            <BaseComboBox
              label={intl.formatMessage({ id: 'page.upload.form.album' })}
              options={null}
              isGrouped={false}
              placeholder={intl.formatMessage({
                id: 'page.upload.form.album.placeholder',
              })}
              name="album"
            />

            {/* Explicit content */}
            <div className="upload-form-explicit">
              <span>
                {intl.formatMessage({ id: 'page.upload.form.explicit.label' })}
              </span>
              <div className="upload-form-explicit__wrapper">
                <BaseRadioButton
                  name="explicit-content"
                  label={intl.formatMessage({
                    id: 'page.upload.form.explicit.no',
                  })}
                  chequed={true}
                  onchange={(e) => handleSelectIsExplicitContent(e, false)}
                />
                <BaseRadioButton
                  name="explicit-content"
                  label={intl.formatMessage({
                    id: 'page.upload.form.explicit.yes',
                  })}
                  chequed={false}
                  onchange={(e) => handleSelectIsExplicitContent(e, true)}
                />
              </div>
            </div>

            <BaseDragAndDropArea
              styles={{
                backgroundColor: 'transparent',
                height: '150px',
                width: '100%',
              }}
              text={intl.formatMessage({
                id: 'page.upload.dragAndDrop.track.text',
              })}
              allowedFormats="mp3, wav, ogg"
              accept=".mp3, .wav, .ogg"
              name="track-upload-track"
              id="track-upload-track"
              handleChange={handleUploadTrackFile}
              drop={dropAudio}
              allowDrop={allowDrop}
              dropCompleted={trackUploadCompleted}
              error={trackUploadError}
              dropCompletedMessage={
                trackUploadError
                  ? intl.formatMessage({
                      id: 'components.dragAndDrop.area.track.message.error',
                    })
                  : intl.formatMessage({
                      id: 'components.dragAndDrop.area.track.message.complete',
                    })
              }
            />

            {/* Upload track button */}
            <div className="upload-track-form__upload-button-container">
              <BaseButton
                type="submit"
                text={intl.formatMessage({
                  id: 'components.buttons.uploadTrack',
                })}
                style="solid"
                color={primaryColorEmphasis}
                rounded
                action={null}
              />
            </div>
          </BaseForm>
        </section>
        {/* <BaseMessage content="An error ocurred during upload the track" type="error" /> */}
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

        .upload-preview-cover {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: flex-start;
          gap: 20px;
        }

        .upload-form-explicit {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }

        .upload-form-explicit > .upload-form-explicit__wrapper {
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

export default UploadTrackPage;

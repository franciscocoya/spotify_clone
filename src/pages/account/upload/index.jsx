import BaseButton from '@components/buttons/BaseButton';
import BaseForm from '@components/Forms/BaseForm/BaseForm';
import BaseComboBox from '@components/inputs/comboBox/BaseComboBox';
import BaseRadioButton from '@components/inputs/radioButton/BaseRadioButton';
import AutoCompleteTextInput from '@components/inputs/textInput/AutoCompleteTextInput';
import TextInput from '@components/inputs/textInput/TextInput';
import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@components/layouts/MetadataLayout';
import useUploadTrack from '@hooks/tracks/useUploadTrack';
import { primaryColorEmphasis } from '@styles/variables.module.scss';
import { prettyDuration } from '@utils/stringUtil';
import dynamic from 'next/dynamic';
import { useIntl } from 'react-intl';

const UploadTrackPreviewCard = dynamic(() =>
  import('@components/cards/UploadTrackPrevierwCard')
);
const BaseDragAndDropArea = dynamic(() =>
  import('@components/dragAndDrop/BaseDragAndDropArea')
);

function UploadTrackPage({ ...props }) {
  const intl = useIntl();
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
    isUploading,
  } = useUploadTrack();

  return (
    <>
      <MetadataLayout
        title={intl.formatMessage({ id: 'page.upload.metadata.title' })}
      />
      <BaseLayout showGradient={false} currentColor={'#ff006e'}>
        <h1>{intl.formatMessage({ id: 'page.upload.title' })}</h1>
        {isUploading.loading ? (
          <div className="loading-upload-background">
            <span>
              {intl.formatMessage({
                id: 'components.messages.loading.upload.track',
              })}
            </span>
            {/* <ReactPlayer url='/videos/loading-form.mp4' /> */}
            <video autoPlay loop width="100%" height="100%" muted>
              <source src="/videos/loading-form.mp4" />
            </video>
          </div>
        ) : (
          <section className="upload-container__wrapper">
            <div className="upload-preview-cover">
              <UploadTrackPreviewCard
                cover={selectedCover && URL.createObjectURL(selectedCover)}
                duration={
                  trackToUpload && prettyDuration(trackToUpload.duration)
                }
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
              <AutoCompleteTextInput
                label={intl.formatMessage({ id: 'page.upload.form.genre' })}
                name="genre"
                required={true}
                autoFocus={false}
                placeholder={intl.formatMessage({
                  id: 'page.upload.form.genre.placeholder',
                })}
                maxLength={30}
                suggestions={
                  props?.genres ?? ['pop', 'rock', 'lofi', 'blues', 'jazz']
                }
              />

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
                  {intl.formatMessage({
                    id: 'page.upload.form.explicit.label',
                  })}
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
                  isUploading={isUploading.loading}
                />
              </div>
            </BaseForm>
          </section>
        )}

        {isUploading.finished && (
          <BaseMessage
            content={intl.formatMessage({
              id: 'components.messages.success.upload.track',
            })}
            type="success"
          />
        )}
      </BaseLayout>
      <style jsx>{`
        h1 {
          text-align: center;
          margin-bottom: 100px;
        }

        .upload-container__wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
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

        .loading-upload-background {
          position: relative;
          width: 100vw;
          height: 100vh;
          position: fixed;
          margin-top: -200px;
        }

        .loading-upload-background > span {
          z-index: 2;
          position: absolute;
          left: 0;
          bottom: 120px;
          transform: translateX(50%);
        }

        .loading-upload-background > video {
          object-fit: cover;
          position: fixed;
          z-index: -1;
        }

        @media only screen and(max-width: 768px) {
          .upload-container__wrapper {
            justify-content: center;
            gap: 50px;
          }
        }
      `}</style>
    </>
  );
}

import BaseMessage from '@components/messages/BaseMessage';
import { promises as fs } from 'fs';
import path from 'path';

export async function getStaticProps() {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(
    jsonDirectory + '/music_genres.json',
    'utf8'
  );
  const musicGenres = JSON.parse(fileContents);

  return {
    props: musicGenres,
  };
}

export default UploadTrackPage;

import useUploadTrack from '@/hooks/tracks/useUploadTrack';
import { darkBlackColor } from '@/styles/variables.module.scss';
import { PlayIcon } from '@heroicons/react/24/solid';
import { IoMusicalNotes } from 'react-icons/io5';
import { useIntl } from 'react-intl';

function UploadTrackPreviewCard({ ...props }) {
  const intl = useIntl();
  const { trackTitle } = useUploadTrack();

  return (
    <>
      <div className="upload-track-preview">
        <div className="track-preview__cover">
          {props.cover && (
            <img
              src={
                props.cover ??
                'https://images.unsplash.com/photo-1652825255413-2dfe69621fc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              }
              alt=""
            />
          )}
          <div className="track-preview-play__wrapper">
            {props.cover ? (
              <PlayIcon width={48} />
            ) : (
              <IoMusicalNotes size={64} />
            )}
          </div>
        </div>
        <div className="track-preview__details">
          <p>
            {trackTitle ||
              intl.formatMessage({ id: 'page.upload.preview.title' })}
          </p>
          <p>{intl.formatMessage({ id: 'page.upload.preview.artist' })}</p>
          <span>
            {' '}
            {props.duration ??
              intl.formatMessage({ id: 'page.upload.preview.duration' })}
          </span>
        </div>
      </div>
      <style jsx>{`
        .upload-track-preview {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
        }

        .upload-track-preview > .track-preview__cover {
          width: 156px;
          height: 156px;
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: ${darkBlackColor};
          border-radius: 20px;
        }

        .upload-track-preview
          > .track-preview__cover:hover
          > .track-preview-play__wrapper {
          display: flex;
        }

        .upload-track-preview > .track-preview__cover > img {
          width: 100%;
          height: 100%;
          fit-content: cover;
        }

        .upload-track-preview
          > .track-preview__cover
          > .track-preview-play__wrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: ${props.cover ? 'none' : 'flex'};
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .upload-track-preview > .track-preview__details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .upload-track-preview > .track-preview__details > p:first-child {
          font-size: 1.5rem;
          font-weight: 500;
          inline-size: 300px;
          line-height: 1.2rem;
          overflow-wrap: break-word;
        }

        .upload-track-preview > .track-preview__details > p:last-of-type {
          font-size: 1rem;
          font-weight: 300;
        }

        .upload-track-preview > .track-preview__details > span {
          font-size: 2rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default UploadTrackPreviewCard;

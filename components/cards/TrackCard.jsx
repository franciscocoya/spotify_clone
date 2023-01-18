import { HeartIcon } from '@heroicons/react/24/solid';
import variables from '@styles/variables.module.scss';
import Image from 'next/image';
import { TfiMoreAlt } from 'react-icons/tfi';

function TrackCard({ ...props }) {
  return (
    <>
      <div className="track-base-card">
        {/* Title and cover */}
        <div className="track-number-cover-container">
          <span>1</span>
          <Image
            loader={() =>
              'https://images.unsplash.com/photo-1634855105161-2f328c473638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            }
            src={
              'https://images.unsplash.com/photo-1634855105161-2f328c473638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            }
            alt={''}
            width={48}
            height={48}
            style={{
              borderRadius: '5px',
            }}
          />
          <div className="track-title-artist">
            <h3>Hightway to Hell</h3>
            <p>AC/DC</p>
          </div>
        </div>

        {/* Album */}
        <div className="track-album">
          <span>Hightway to Hell</span>
        </div>

        {/* Created at */}
        <div className="track-createdAt">
          <span>5 hours ago</span>
        </div>

        {/* Duration */}
        <div className="track-duration-settings">
          <HeartIcon width={20} fill={variables.primaryColorEmphasis} />
          <span>3:28</span>
          <div className="track-duration-settings__more-settings">
            <TfiMoreAlt size={20} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .track-base-card {
          width: 100%;
          height: 80px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 5px;
          padding: 0 20px;
          background-color: transparent;
          border-radius: 4px;
        }

        .track-base-card:hover {
          background-color: ${variables.whiteColorTransparent};
        }

        .track-base-card:hover
          .track-duration-settings
          > .track-duration-settings__more-settings {
          opacity: 1;
        }

        .track-number-cover-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }

        .track-number-cover-container > .track-cover-thumbnail {
          border-radius: 8px;
        }

        .track-number-cover-container > .track-title-artist {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .track-title-artist > h3 {
          font-size: 1rem;
          font-weight: 400;
          opacity: 0.9;
        }

        .track-title-artist > p {
          font-size: 0.8rem;
          font-weight: 300;
          color: ${variables.whiteColor};
          opacity: 0.8;
        }

        .track-duration-settings {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .track-duration-settings > .track-duration-settings__more-settings {
          opacity: 0;
        }

        @media (max-width: 850px) {
          .track-createdAt {
            display: none;
          }
        }

        @media (max-width: 800px) {
          .track-album {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default TrackCard;

import { HeartIcon } from '@heroicons/react/24/solid';
import useArtist from '@hooks/artist/useArtist';
import { getArtistNameById } from '@services/artistCrudService';
import variables from '@styles/variables.module.scss';
import { convertToRelativeDate } from '@utils/stringUtil';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoPlaySharp } from 'react-icons/io5';
import { TfiMoreAlt } from 'react-icons/tfi';

function TrackCard({ ...props }) {
  const [isHover, setIsHover] = useState(false);
  const [isArtistHover, setIsArtistHover] = useState(false);
  const [isTrackHover, setIsTrackHover] = useState(false);
  const [artistName, setArtistName] = useState('');
  const { setSelectedArtist } = useArtist();

  const selectArtistInfo = (shortlink) => {
    setSelectedArtist({
      shortlink,
      id: props?.artist,
    });
  };

  useEffect(() => {
    const loadArtistData = async () => {
      const data = await getArtistNameById(props?.artist);
      console.log(data);
      setArtistName(data);
    };
    loadArtistData();
  }, []);

  return (
    <>
      <div
        className="track-base-card"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Title and cover */}
        <div className="track-number-cover-container">
          <span className="track-number-cover-container__number-play">
            {isHover ? <IoPlaySharp size={16} /> : props.position}
          </span>
          <Image
            loader={() => props?.cover}
            src={props?.cover}
            alt={props?.title}
            width={48}
            height={48}
            style={{
              borderRadius: '5px',
            }}
          />
          <div className="track-title-artist">
            <Link
              href={{
                pathname: props?.artist
                  ? `/artist/${crypto.randomUUID()}`
                  : '#',
                query: props?.artist,
              }}
              style={{
                color: variables.whiteColor,
                textDecoration: isArtistHover ? 'underline' : 'none',
                fontSize: '1rem',
                fontWeight: 400,
                opacity: 0.9,
              }}
              onMouseEnter={() => setIsArtistHover(true)}
              onMouseLeave={() => setIsArtistHover(false)}
              onClick={selectArtistInfo(
                Math.random().toString(36).substring(2, 6)
              )}
              scroll={false}
            >
              {props?.title}
            </Link>
            <Link
              href={props?.artist ? `/artist/${props?.artist}` : '#'}
              style={{
                fontSize: '0.8rem',
                fontWeight: 300,
                textDecoration: isTrackHover ? 'underline' : 'none',
                color: variables.whiteColor,
                opacity: 0.8,
              }}
              onMouseEnter={() => setIsTrackHover(true)}
              onMouseLeave={() => setIsTrackHover(false)}
              scroll={false}
            >
              {artistName}
            </Link>
          </div>
        </div>

        {/* Album */}
        <div className="track-album">
          <span>{props?.album || ''}</span>
        </div>

        {/* Created at */}
        <div className="track-createdAt">
          <span>{convertToRelativeDate(props?.createdAt)}</span>
        </div>

        {/* Duration */}
        <div className="track-duration-settings">
          <HeartIcon width={20} fill={variables.primaryColorEmphasis} />
          <span className="track-duration-settings__time">3:28</span>
          <div className="track-duration-settings__more-settings">
            <TfiMoreAlt size={20} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .track-base-card {
          width: 100%;
          height: 80px;
          display: grid;
          grid-template-columns: 30% 20% auto minmax(100px, 150px);
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

        .track-base-card:hover .track-album > span,
        .track-base-card:hover .track-createdAt > span {
          opacity: 1;
        }

        .track-number-cover-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }

        .track-number-cover-container
          > .track-number-cover-container__number-play {
          width: 20px;
          max-width: 40px;
        }

        .track-number-cover-container > .track-cover-thumbnail {
          border-radius: 8px;
        }

        .track-number-cover-container > .track-title-artist {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .track-album > span,
        .track-createdAt > span {
          font-size: 0.9rem;
          font-weight: 300;
          opacity: 0.8;
        }

        .track-duration-settings {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .track-duration-settings > .track-duration-settings__time {
          font-size: 0.9rem;
          font-weight: 300;
          opacity: 0.8;
        }

        .track-duration-settings > .track-duration-settings__more-settings {
          opacity: 0;
        }

        @media (max-width: 850px) {
          .track-base-card {
            grid-template-columns: repeat(2, auto) minmax(80px, 100px);
          }

          .track-createdAt {
            display: none;
          }
        }

        @media (max-width: 800px) {
          .track-base-card {
            grid-template-columns: auto 100px;
          }

          .track-album {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default TrackCard;

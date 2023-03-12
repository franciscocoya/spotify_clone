import variables from '@/styles/variables.module.scss';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useIntl } from 'react-intl';

function PlayerSongDetails({ poster, title, author, isLiked }) {
  const intl = useIntl();
  const [like, setLike] = useState(isLiked);

  const handleSongLike = (e) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <>
      <div className="player--song-details">
        <Image
          src={'/images/sample1.jfif'}
          alt={`${intl.formatMessage({
            id: 'components.player.song_details_posterAlt',
          })} ${title}`}
          width={64}
          height={64}
          placeholder="blur"
          blurDataURL="/images/img_loading_placeholder.png"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '8px',
          }}
        />
        <div className="player--song-details__name">
          <Link
            href=""
            className="song-details_song_title"
            style={{
              textDecoration: 'none',
              color: variables.whiteColor,
              fontSize: '0.9rem',
            }}
          >
            Serenade
          </Link>
          <Link
            href=""
            className="song-details_song_artist"
            style={{
              textDecoration: 'none',
              color: variables.linkNotActiveColor,
              fontSize: '0.8rem',
            }}
          >
            Dover
          </Link>
        </div>
        <div>
          {like ? (
            <HeartIcon
              width={24}
              onClick={handleSongLike}
              fill={variables.primaryColor}
            />
          ) : (
            <HeartIconOutline width={24} onClick={handleSongLike} />
          )}
        </div>
      </div>
      <style jsx>{`
        .player--song-details {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .player--song-details__name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 1px;
        }

        @media (max-width: 1055px) {
          .player--song-details {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default PlayerSongDetails;

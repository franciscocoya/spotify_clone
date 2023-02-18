import Player from '@components/Player';
import PlayerSongDetails from '@components/PlayerSongDetails';
import VolumeControl from '@components/VolumeControl';
import variables from '@styles/variables.module.scss';

function BasePlayer({ ...props }) {
  return (
    <>
      <div className="base-player-container">
        <PlayerSongDetails isLiked={false} />
        <Player />
        <VolumeControl />
      </div>
      <style jsx>{`
          .base-player-container{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            grid-area: playing-bar;
            display: flex;
            flex-direction: row,
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            background-color: ${variables.darkMidGrayColorTransparent};
            backdrop-filter: blur(6px);
            border-top: 1px solid ${variables.darkGrayColor};
            padding: 0 20px;
          }

          .base-player-mobile{
            max-width: minmax(676px, 800px);
          }
      `}</style>
    </>
  );
}

export default BasePlayer;

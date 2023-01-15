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
            grid-area: playing-bar;
            height: 100px;
            display: flex;
            flex-direction: row,
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            background-color: ${variables.darkMidGrayColor};
            padding: 0 20px;
          }
      `}</style>
    </>
  );
}

export default BasePlayer;

import Controls from '@components/ButtonControls';
import PlayerProgress from '@components/PlayerProgress';

function Player({ ...props }) {
  return (
    <>
      <div id="app-main-player">
        <Controls />
        <PlayerProgress duration={1.530987638} />
      </div>
      <style jsx>{`
        #app-main-player{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center:
          align-items: center;
          gap: 15px;
        }
      `}</style>
    </>);
}

export default Player;
import useAudioPlayer from '@hooks/useAudioPlayer';
import variables from '@styles/variables.module.scss';
import { prettyDuration } from '@utils/stringUtil';
import { hideProgressIcons } from '@vendor/slider';
import { useRef } from 'react';

function PlayerProgress({ ...props }) {
  const { elapsedTime, songDuration, changeCurrentTime } = useAudioPlayer();

  const progressBar = useRef(null);

  const handleRangeInput = (e) => {
    progressBar.current.value = e.target.value;
    changeCurrentTime(e.target.value);
  };

  return (
    <>
      <div className="player-progress">
        <div className="audio-progress__elapsedDuration">
          <span>{prettyDuration(elapsedTime)}</span>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="player-pseudo-progress-bar">
            <div id="progress-bar-bg__elapsed"></div>
            <div id="progress-bar-bg__total"></div>
            <div id="progress-bar__marker"></div>
          </div>
          <div
            className="progress-range__hidden"
            id="player-genuine-progress-slider"
            onMouseOver={(e) => hideProgressIcons(e, false)}
            onMouseLeave={(e) => hideProgressIcons(e, true)}
          >
            <input
              ref={progressBar}
              type="range"
              step={0.1}
              min={0}
              max={songDuration}
              defaultValue="0"
              onInput={handleRangeInput}
            />
          </div>
        </div>
        <div className="audio-progress__songDuration">
          <span>{prettyDuration(songDuration)}</span>
        </div>
      </div>
      <style jsx>{`
        .player-progress {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 60%;
          margin: 0 auto;
        }

        .audio-progress__elapsedDuration,
        .audio-progress__songDuration {
          font-size: 0.9rem;
          font-weight: 400;
          color: ${variables.whiteColor};
          opacity: 0.7;
        }

        .player-pseudo-progress-bar {
          max-width: 500px;
          width: 500px;
          height: 25px;
          position: relative;
          vertical-align: center;
          user-select: none;
        }

        .player-pseudo-progress-bar:hover > #progress-bar-bg__elapsed,
        .progress-range__hidden:hover + #progress-bar-bg__elapsed {
          background-color: ${variables.primaryColorEmphasis};
          opacity: 1;
        }

        .player-pseudo-progress-bar > #progress-bar__marker {
          width: 15px;
          height: 15px;
          position: absolute;
          left: ${(elapsedTime / songDuration) * 100}%;
          top: 0;
          background: ${variables.whiteColor};
          border-radius: 20px;
          transform: translateY(calc((25px - 15px) / 2));
          z-index: 1;
        }

        .player-pseudo-progress-bar > #progress-bar-bg__elapsed,
        .player-pseudo-progress-bar > #progress-bar-bg__total {
          height: 5px;
          position: absolute;
          transform: translateY(calc((25px - 5px) / 2));
          left: 0;
          top: 0;
          border-radius: 20px;
          background-color: ${variables.whiteColor};
          margin: 0;
          padding: 0;
          transition: background 0.3s 0s linear;
        }

        .player-pseudo-progress-bar > #progress-bar-bg__elapsed {
          width: 0;
          opacity: 0.9;
        }

        .player-pseudo-progress-bar > #progress-bar-bg__total {
          width: 100%;
          opacity: 0.3;
        }

        .progress-range__hidden {
          //display: none;
          position: absolute;
          top: 0;
          width: 100%;
          opacity: 1;
          z-index: 2;
          transition: opacity 0.1s 0s linear;
        }

        .progress-range__hidden > input[type='range'] {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default PlayerProgress;

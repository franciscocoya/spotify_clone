import ProgressBar from '@components/ProgressBar';
import useAudioPlayer from '@hooks/useAudioPlayer';
import variables from '@styles/variables.module.scss';
import { prettyDuration } from '@utils/stringUtil';
import { useEffect, useRef } from 'react';

function PlayerProgress({ ...props }) {
  const {
    elapsedTime,
    songDuration,
    changeCurrentTime,
    progressValue,
    setProgressValue,
    setIsProgressDragged,
  } = useAudioPlayer();

  const progressBar = useRef(null);

  // When the progress changes, update elapsed time.
  const handleRangeInput = (e) => {
    setIsProgressDragged(true); // for update time issues
    setProgressValue(e.target.value);
    changeCurrentTime(e.target.value);
  };

  // Isolate elapsed time indicator and update it with progress value instead.
  useEffect(() => {
    progressBar.current.value = progressValue;
  }, [progressValue]);

  return (
    <>
      <div className="player-progress">
        <div className="audio-progress__elapsedDuration">
          <span>{prettyDuration(progressValue)}</span>
        </div>

        <ProgressBar
          progressBarWidth="500px"
          progressBarHeight="25px"
          progressBarMarkerSize="15px"
          markerLeftAdjust="1"
          progressElapsedId="progress-bar-bg--player__elapsed"
          progressTotalId="progress-bar-bg--player__total"
          progressMarkerId="progress-bar--player__marker"
          inputRef={progressBar}
          min={0}
          max={songDuration}
          value={progressValue}
          handleOnInput={handleRangeInput}
          handleInputMouseUp={() => setIsProgressDragged(false)}
          currentProgress={progressValue}
          totalProgress={songDuration}
        />
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
      `}</style>
    </>
  );
}

export default PlayerProgress;

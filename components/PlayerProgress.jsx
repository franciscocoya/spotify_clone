import variables from '@styles/variables.module.scss';
import { useState } from 'react';

function PlayerProgress({ ...props }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  let totalDuration = props.duration;

  const setProgress = (value) => {
    document.getElementById('progress-bar__marker').style.left = value + (value > 0 && 'px');
    document.getElementById('progress-bar-bg__elapsed').style.width = value + (25 / 2) + 'px';
  }

  const moveProgressMarker = (e) => {
    const progressValue = e.target.value;
    setElapsedTime(progressValue);

    if (progressValue <= 0) {
      setProgress(0);

    } else if (progressValue >= 100) {
      setProgress(500 - (20 / 2))

    } else if (progressValue >= 64 && progressValue <= 80) {
      setProgress(500 * progressValue * 1.0 / 100.0 - 10)

    } else if (progressValue > 80 && progressValue < 97) {
      setProgress(500 * progressValue * 1.0 / 100.0 - 12);

    } else if (progressValue >= 97 && progressValue < 100) {
      setProgress(500 * progressValue * 1.0 / 100.0 - 15);

    } else {
      setProgress(500 * progressValue * 1.0 / 100.0 - 5);
    }
  }

  const hideProgressIcons = (e, hide) => {
    e.preventDefault();
    document.getElementById('progress-bar__marker').style.opacity = hide ? 0 : 1;
    document.getElementById('progress-bar-bg__elapsed').style.opacity = hide ? .9 : 0;
  }


  return (<>
    <div className='player-progress'>
      <div className='audio-progress__elapsedDuration'>
        <span>2:31</span>
      </div>
      <div style={{ position: 'relative' }}>
        <div className='player-pseudo-progress-bar'>
          <div id="progress-bar-bg__elapsed"></div>
          <div id="progress-bar-bg__total"></div>
          <div id="progress-bar__marker"></div>
        </div>
        <div className="progress-range__hidden" id="player-genuine-progress-slider" onMouseOver={(e) => hideProgressIcons(e, false)}
          onMouseLeave={(e) => hideProgressIcons(e, true)}
        >
          <label htmlFor=""></label>
          <input type="range" step={.5} min={0} max={100} value={elapsedTime} onInput={moveProgressMarker} />
        </div>
      </div>
      <div className='audio-progress__songDuration'>
        <span>3:45</span>
      </div>
    </div>
    <style jsx>{`
      .player-progress{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 60%;
        margin: 0 auto;
      }

      .audio-progress__elapsedDuration,
      .audio-progress__songDuration{
        font-size: 0.9rem;
        font-weight: 400;
        color: ${variables.whiteColor};
        opacity: .7;
      }

      .player-pseudo-progress-bar{
        max-width: 500px;
        width: 500px;
        height: 25px;
        position: relative;
        vertical-align: center;
        user-select: none;
      }

      .player-pseudo-progress-bar:hover > #progress-bar-bg__elapsed,
      .progress-range__hidden:hover + #progress-bar-bg__elapsed{
        background-color: ${variables.primaryColorEmphasis};
        opacity: 1;
      }

      .player-pseudo-progress-bar > #progress-bar__marker{
        width: 15px;
        height: 15px;
        position: absolute;
        left: 0;
        top: 0;
        background: ${variables.whiteColor};
        border-radius: 20px;
        transform: translateY(calc((25px - 15px) / 2.0));
        z-index: 1;
      }

      .player-pseudo-progress-bar > #progress-bar-bg__elapsed,
      .player-pseudo-progress-bar > #progress-bar-bg__total{
        height: 5px;
        position: absolute;
        transform: translateY(calc((25px - 5px) / 2.0));
        left: 0;
        top: 0;
        border-radius: 20px;
        background-color: ${variables.whiteColor};
        margin: 0;
        padding: 0;
        transition: background 0.3s 0s linear
      }

      .player-pseudo-progress-bar > #progress-bar-bg__elapsed{
        width: 0;
        opacity: .9;
      }

      .player-pseudo-progress-bar > #progress-bar-bg__total{
        width: 100%;
        opacity: .3;
      }

      .progress-range__hidden{
        //display: none;
        position: absolute;
        top: 0;
        width: 100%;
        opacity: 0;
        z-index: 2;
        transition: opacity 0.1s 0s linear
      }

      .progress-range__hidden > input[type='range']{
        width: 100%;
      }
    `}</style>
  </>)
}

export default PlayerProgress;
import variables from '@styles/variables.module.scss';
import { hideProgressIcons } from '@vendor/slider';

function ProgressBar({ ...props }) {
  return (
    <>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div className={`player-pseudo-progress-bar`}>
          <div
            className="progress-bar-bg__elapsed"
            id={props.progressElapsedId}
          ></div>
          <div
            className="progress-bar-bg__total"
            id={props.progressTotalId}
          ></div>
          <div
            className="progress-bar__marker"
            id={props.progressMarkerId}
          ></div>
        </div>
        <div
          className="progress-range__hidden"
          onMouseOver={(e) =>
            hideProgressIcons(
              e,
              props.progressElapsedId,
              props.progressMarkerId,
              props.value,
              false
            )
          }
          onMouseLeave={(e) =>
            hideProgressIcons(
              e,
              props.progressElapsedId,
              props.progressMarkerId,
              props.value,
              true
            )
          }
        >
          <input
            ref={props.inputRef}
            type="range"
            step={props.step || 1}
            min={props.min || 0}
            max={props.max}
            value={props.value}
            onInput={props.handleOnInput}
            onMouseUp={props.handleInputMouseUp}
          />
        </div>
      </div>
      <style jsx>{`
        .player-pseudo-progress-bar {
          max-width: ${props.progressBarWidth};
          width: ${props.progressBarWidth};
          height: ${props.progressBarHeight};
          position: relative;
          vertical-align: center;
          user-select: none;
        }

        .player-pseudo-progress-bar:hover
          > #${props.progressElapsedId},
          .progress-range__hidden:hover
          + #${props.progressElapsedId} {
          background-color: ${variables.primaryColorEmphasis};
          opacity: 1;
        }

        .player-pseudo-progress-bar > #${props.progressMarkerId} {
          width: ${props.progressBarMarkerSize};
          height: ${props.progressBarMarkerSize};
          position: absolute;
          left: ${(props.currentProgress / props.totalProgress) * 100 -
          (props.currentProgress > 0 ? props.markerLeftAdjust : 0)}%;
          top: 0;
          background: ${variables.whiteColor};
          border-radius: 20px;
          transform: translateY(
            calc(
              (${props.progressBarHeight} - ${props.progressBarMarkerSize}) / 2
            )
          );
          z-index: 1;
        }

        .player-pseudo-progress-bar
          > #${props.progressElapsedId},
          .player-pseudo-progress-bar
          > #${props.progressTotalId} {
          height: 5px;
          position: absolute;
          transform: translateY(calc((${props.progressBarHeight} - 5px) / 2));
          left: 0;
          top: 0;
          border-radius: 20px;
          background-color: ${variables.whiteColor};
          margin: 0;
          padding: 0;
          transition: background 0.3s 0s linear;
        }

        .player-pseudo-progress-bar > #${props.progressElapsedId} {
          width: ${(props.currentProgress / props.totalProgress) * 100 + 1}%;
          opacity: 0.9;
        }

        .player-pseudo-progress-bar > #${props.progressTotalId} {
          width: ${props.progressBarWidth};
          opacity: 0.3;
        }

        .progress-range__hidden {
          position: absolute;
          top: 0;
          width: ${props.progressBarWidth};
          opacity: 0;
          z-index: ${variables.zIndexOriginalProgressBar};
          transition: opacity 0.1s 0s linear;
        }

        .progress-range__hidden > input[type='range'] {
          width: ${props.progressBarWidth};
        }
      `}</style>
    </>
  );
}

export default ProgressBar;

import ProgressBar from '@components/ProgressBar';
import useAudioPlayer from '@hooks/useAudioPlayer';
import variables from '@styles/variables.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SlVolume1, SlVolume2, SlVolumeOff } from 'react-icons/sl';

function VolumeControl({ ...props }) {
  const [pageWidth, setPageWidth] = useState(0);
  const { volume, setVolume, muteVolume, volumeCopy, resetVolume } =
    useAudioPlayer();

  const volumeControl = useRef(null); // Main content wrapper
  const volumeProgress = useRef(null); // Progress bar
  const volumeIconRef = useRef(null); // Volume dinamic icon

  const toogleMuteVolume = (e) => {
    e.preventDefault();
    volume > 0 ? setVolume(0) : setVolume(volume);
  };

  const handleRangeInput = (e) => {
    console.log(e.target.value);
    setVolume(e.target.value);
  };

  const getVolumeIcon = () => {
    if (isNaN(volume) || volume <= 0) {
      return <SlVolumeOff size="20px" onClick={resetVolume} />;
    } else if (volume > 0 && volume <= 0.5) {
      return <SlVolume1 size="20px" onClick={muteVolume} />;
    } else if (volume > 0.5) {
      return <SlVolume2 size="20px" onClick={muteVolume} />;
    }
  };

  useEffect(() => {
    volumeProgress.current.value = volume;
  }, [volume]);

  const showVolumePopup = () => {
    if (
      !volumeControl ||
      typeof window === 'undefined' ||
      typeof document === 'undefined'
    ) {
      return;
    }

    setPageWidth(window.innerWidth);
    volumeControl.current.classList.toggle('volume-mobile', pageWidth < 800);
    pageWidth < 800
      ? document
          .getElementsByClassName('base-player-container')[0]
          .classList.add('base-player-mobile')
      : document
          .getElementsByClassName('base-player-container')[0]
          .classList.remove('base-player-mobile');
  };

  useEffect(() => {
    const loadEvents = () => {
      setPageWidth(1);
      window.addEventListener('resize', showVolumePopup);
      volumeControl.current.addEventListener('load', showVolumePopup);
    };

    loadEvents();
  }, [pageWidth]);

  return (
    <>
      <div
        className={`volume-control-container volume-mobile`}
        ref={volumeControl}
      >
        <div ref={volumeIconRef}>{getVolumeIcon()}</div>
        <ProgressBar
          progressBarWidth="100px"
          progressBarHeight="25px"
          progressBarMarkerSize="15px"
          markerLeftAdjust="10"
          progressElapsedId="progress-bar-bg--audio-control__elapsed"
          progressTotalId="progress-bar-bg--audio-control__total"
          progressMarkerId="progress-bar--audio-control__marker"
          inputRef={volumeProgress}
          step={0.1}
          min={0}
          max={1}
          value={volume}
          handleOnInput={handleRangeInput}
          handleInputMouseUp={null}
          currentProgress={volume}
          totalProgress={1}
        />
      </div>
      <style jsx>{`
        .volume-control-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }

        .volume-mobile {
          position: fixed;
          right: 40px;
          background-color: ${variables.blackColorTransparent};
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 50px;
          transform: translateY(-87vh);
          z-index: ${variables.zIndexVolumeControlMobile};
          transition: all 165ms ease-in-out;
          animation: fadeIn 2s;
        }

        .volume-mobile:hover {
          background-color: ${variables.whiteColorTransparent};
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default VolumeControl;

import ProgressBar from "@components/ProgressBar";
import useAudioPlayer from "@hooks/useAudioPlayer";
import { useEffect, useRef } from "react";
import { SlVolume1, SlVolume2, SlVolumeOff } from 'react-icons/sl';

function VolumeControl({ ...props }) {
  const { volume, setVolume, muteVolume, volumeCopy, resetVolume } = useAudioPlayer();

  const volumeProgress = useRef(null);
  const volumeIconRef = useRef(null);

  const toogleMuteVolume = (e) => {
    e.preventDefault();
    volume > 0 ? setVolume(0) : setVolume(volume)
  }

  const handleRangeInput = (e) => {
    console.log(e.target.value);
    setVolume(e.target.value);
  }

  const getVolumeIcon = () => {
    if (isNaN(volume) || volume <= 0) {
      return <SlVolumeOff size="20px" onClick={resetVolume} />

    } else if (volume > 0 && volume <= 0.5) {
      return <SlVolume1 size="20px" onClick={muteVolume} />

    } else if (volume > 0.5) {
      return <SlVolume2 size="20px" onClick={muteVolume} />
    }
  }

  useEffect(() => {
    volumeProgress.current.value = volume;
  }, [volume]);

  return (
    <>
      <div className="volume-control-container">
        <div ref={volumeIconRef} >
          {
            getVolumeIcon()
          }
        </div>
        <ProgressBar
          progressBarWidth='100px'
          progressBarHeight='25px'
          progressBarMarkerSize='15px'
          markerLeftAdjust='10'
          progressElapsedId='progress-bar-bg--audio-control__elapsed'
          progressTotalId='progress-bar-bg--audio-control__total'
          progressMarkerId='progress-bar--audio-control__marker'
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
        .volume-control-container{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }
        `}</style>
    </>
  );
}

export default VolumeControl;

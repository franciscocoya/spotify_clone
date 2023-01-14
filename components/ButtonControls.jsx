import AudioControlButton from '@components/AudioControlButton';

import { BiPlay } from 'react-icons/bi';
import { GiPauseButton } from 'react-icons/gi';
import { IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io';
import { RiRepeatLine } from 'react-icons/ri';
import { TbArrowsSplit2 } from 'react-icons/tb';

import variables from '@styles/variables.module.scss';

import useAudioPlayer from '@hooks/useAudioPlayer';
import { useEffect, useRef } from 'react';

function Controls({ ...props }) {
  const {
    isPlaying,
    currentSong,
    setIsPlaying,
    setSongDuration,
    songDuration,
    elapsedTime,
    changeProgressValue,
    setElapsedTime,
  } = useAudioPlayer();

  const audioPlayer = useRef(null);

  const toogleIsPlaying = (e) => {
    e.preventDefault();
    const isPlayingAux = isPlaying;
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlayingAux);
  };

  useEffect(() => {
    changeProgressValue();
    audioPlayer.current.currentTime = elapsedTime;
  }, [songDuration, elapsedTime]);

  // Update song duration and elapsed time
  useEffect(() => {
    setSongDuration(audioPlayer?.current?.duration);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <>
      <div className="audio-control-buttons">
        <audio ref={audioPlayer} id="player-main-current-song">
          <source src={currentSong} />
        </audio>
        {/* Suffle */}
        <AudioControlButton>
          <TbArrowsSplit2 size="24px" fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Previuos song */}
        <AudioControlButton>
          <IoIosSkipBackward size="24px" fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Play */}
        <AudioControlButton
          stackedIcon={true}
          growIcon={true}
          action={toogleIsPlaying}
        >
          {isPlaying ? (
            <GiPauseButton size="20px" fill={variables.darkMidGrayColor} />
          ) : (
            <BiPlay
              size="32px"
              fill={variables.darkMidGrayColor}
              viewBox="0 0 20 24"
            />
          )}
        </AudioControlButton>

        {/* Next song */}
        <AudioControlButton>
          <IoIosSkipForward size="24px" fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Repeat current song */}
        <AudioControlButton>
          <RiRepeatLine size="24px" fill={variables.whiteColor} />
        </AudioControlButton>
      </div>
      <style jsx>{`
        #player-main-current-song {
          display: none;
        }
        .audio-control-buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
      `}</style>
    </>
  );
}

export default Controls;

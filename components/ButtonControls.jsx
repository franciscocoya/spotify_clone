import NextSongButton from '@components/buttons/NextSongButton';
import PlayPauseButton from '@components/buttons/PlayPauseButton';
import PreviousSongButton from '@components/buttons/PreviousSongButton';
import RepeatSongButton from '@components/buttons/RepeatSongButton';
import SufflePlayButton from '@components/buttons/SufflePlayButton';
import CurrentSongAudio from '@components/CurrentSongAudio';
import useAudioPlayer from '@hooks/useAudioPlayer';
import { useEffect, useRef } from 'react';

function Controls({ ...props }) {
  const {
    isPlaying,
    currentSong,
    setIsPlaying,
    setSongDuration,
    changeProgressValue,
    progressValue,
    isProgressDragged,
    volume,
    repeatCurrentSong,
    songDuration,
  } = useAudioPlayer();

  const audioPlayer = useRef(null);

  const toogleIsPlaying = (e) => {
    e.preventDefault();
    const isPlayingAux = isPlaying;
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlayingAux);
  };

  // If progress bar is touched.
  useEffect(() => {
    audioPlayer.current.currentTime = progressValue;
  }, [isProgressDragged]);

  // When volume changes the value
  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (progressValue === songDuration && repeatCurrentSong) {
      audioPlayer.current.play();
    }
  }, [progressValue]);

  // Update song duration and elapsed time
  useEffect(() => {
    setSongDuration(audioPlayer?.current?.duration);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <>
      <div className="audio-control-buttons">
        <CurrentSongAudio
          audioPlayerRef={audioPlayer}
          currentSong={currentSong}
          onTimeUpdateAction={(e) => changeProgressValue(e.target.currentTime)}
          volume={volume}
        />
        <SufflePlayButton action={null} />
        <PreviousSongButton action={null} />
        <PlayPauseButton action={toogleIsPlaying} isPlaying={isPlaying} />
        <NextSongButton action={null} />
        <RepeatSongButton action={null} />
      </div>
      <style jsx>{`
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

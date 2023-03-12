import {
  currentPlayingSongState,
  elapsedPlayingState,
  songDurationState,
  songIsPlayingState,
} from '@/atoms/SongAtom';

import {
  isProgressTouchingState,
  playerProgressBarState,
  playerRepeatCurrentSongState,
  playerVolumeCopyState,
  playerVolumeState,
} from '@/atoms/PlayerAtom';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useRecoilState(songIsPlayingState);
  const [currentSong, setCurrentSong] = useRecoilState(currentPlayingSongState);
  const [elapsedTime, setElapsedTime] = useRecoilState(elapsedPlayingState);
  const [songDuration, setSongDuration] = useRecoilState(songDurationState);
  const [progressValue, setProgressValue] = useRecoilState(
    playerProgressBarState
  );
  const [isProgressDragged, setIsProgressDragged] = useRecoilState(
    isProgressTouchingState
  );
  const [volume, setVolume] = useRecoilState(playerVolumeState);
  const [volumeCopy, setVolumeCopy] = useRecoilState(playerVolumeCopyState);
  const [repeatCurrentSong, setRepeatCurrentSong] = useRecoilState(
    playerRepeatCurrentSongState
  );

  const changeCurrentTime = (currentTime) => {
    setElapsedTime(currentTime);
  };

  const changeProgressValue = (duration) => {
    isProgressDragged
      ? setProgressValue(progressValue)
      : setProgressValue(duration);
  };

  const refreshProgressBar = (value) => {
    setElapsedTime(value);
  };

  // Set volume to zero
  const muteVolume = () => {
    setVolumeCopy(volume);
    setVolume(0);
  };

  // Reset the volume state to the saved copy
  const resetVolume = () => {
    setVolume(volumeCopy);
  };

  // Toogle the repeat song
  const toogleRepeatCurrentSong = () => {
    setRepeatCurrentSong(!repeatCurrentSong);
  };

  // Reset the current time to zero and pause the song which is playing now
  useEffect(() => {
    if (!isNaN(progressValue) && progressValue === songDuration) {
      setIsPlaying(repeatCurrentSong);
      setProgressValue(0);
    }
  }, [progressValue]);

  return {
    setIsPlaying,
    isPlaying,
    setCurrentSong,
    currentSong,
    setElapsedTime,
    elapsedTime,
    setSongDuration,
    songDuration,
    changeCurrentTime,
    changeProgressValue,
    setProgressValue,
    progressValue,
    refreshProgressBar,
    setIsProgressDragged,
    isProgressDragged,
    setVolume,
    volume,
    muteVolume,
    volumeCopy,
    resetVolume,
    toogleRepeatCurrentSong,
    repeatCurrentSong,
  };
}

export default useAudioPlayer;

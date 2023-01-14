import {
  currentPlayingSongState,
  elapsedPlayingState,
  songDurationState,
  songIsPlayingState,
} from '@atoms/SongAtom';

import { playerProgressBarState } from '@atoms/PlayerAtom';

import { useRecoilState } from 'recoil';

function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useRecoilState(songIsPlayingState);
  const [currentSong, setCurrentSong] = useRecoilState(currentPlayingSongState);
  const [elapsedTime, setElapsedTime] = useRecoilState(elapsedPlayingState);
  const [songDuration, setSongDuration] = useRecoilState(songDurationState);
  const [progressValue, setProgressValue] = useRecoilState(
    playerProgressBarState
  );

  // const audioPlayer = useRef();
  // const progressBar = useRef();

  const changeCurrentTime = (currentTime) => {
    setElapsedTime(currentTime);
    //changeProgressValue(currentTime);
  };

  const changeProgressValue = (duration) => {
    setProgressValue(duration);
  };

  // Update the audio element currentTime
  // useEffect(() => {
  //   console.log(audioPlayer?.current?.currentTime);
  //   setElapsedTime(audioPlayer?.current?.currentTime);
  // }, [elapsedTime]);

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
    progressValue,
    setProgressValue,
  };
}

export default useAudioPlayer;

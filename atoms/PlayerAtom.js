import { atom } from 'recoil';

/* If user selects suffle option */
const sufflePlayState = atom({
  key: 'sufflePlayState',
  default: false,
});

/* If user selects repeat option */
const repeatCurrentSongState = atom({
  key: 'repeatCurrentSongState',
  default: false,
});

/* Value for the progress bar of the player */
const playerProgressBarState = atom({
  key: 'playerProgressBarState',
  default: 0,
});

/* Represent if the progressbar is touching */
const isProgressTouchingState = atom({
  key: 'isProgressDragedState',
  default: false,
});

/* Value of the player volume */
const playerVolumeState = atom({
  key: 'playVolumeState',
  default: 0.2,
});

/* Use when user mutes the song in order to save a copy of the previous state of the volume */
const playerVolumeCopyState = atom({
  key: 'playerVolumeCopyState',
  default: 0.2,
});

/* Determines if player have to play the current song again */
const playerRepeatCurrentSongState = atom({
  key: 'playerRepeatCurrentSongState',
  default: false,
});

export {
  playerProgressBarState,
  isProgressTouchingState,
  playerVolumeState,
  playerVolumeCopyState,
  playerRepeatCurrentSongState,
};

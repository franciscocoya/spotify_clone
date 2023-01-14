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

export { playerProgressBarState };

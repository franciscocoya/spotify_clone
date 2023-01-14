import { atom } from 'recoil';

/* Song is playing now ? */
const songIsPlayingState = atom({
  key: 'songIsPlayingState',
  default: false,
});

/* Path of song which is playing now */
const currentPlayingSongState = atom({
  key: 'currentPlayingSongState',
  default: '/music/chilled-acoustic-indie-folk-ig-version-60s-9648.mp3',
});

/*Current song elapsed playing time */
const elapsedPlayingState = atom({
  key: 'elapsedPlayingState',
  default: 0,
});

/*Duration of the song which is playing now */
const songDurationState = atom({
  key: 'songDurationState',
  default: 0,
});

export {
  songIsPlayingState,
  elapsedPlayingState,
  currentPlayingSongState,
  songDurationState,
};

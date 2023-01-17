import { atom } from 'recoil';

/* Song is playing now ? */
const songIsPlayingState = atom({
  key: 'songIsPlayingState',
  default: false,
});

/* Path of song which is playing now */
const currentPlayingSongState = atom({
  key: 'currentPlayingSongState',
  default:
    'https://firebasestorage.googleapis.com/v0/b/spotify-clone-565b3.appspot.com/o/songs%2Fepic-cinematic-trailer-version-60s-9887.mp3?alt=media&token=a08c5774-f09b-4c26-b294-ce58d6477859',
});

/* Current song elapsed playing time */
const elapsedPlayingState = atom({
  key: 'elapsedPlayingState',
  default: 0,
});

/*Duration of the song which is playing now */
const songDurationState = atom({
  key: 'songDurationState',
  default: 0,
});

/* The songs which are going to be loaded at Home page */
const homeSongsState = atom({
  key: 'homeSongsState',
  default: [],
});

export {
  songIsPlayingState,
  elapsedPlayingState,
  currentPlayingSongState,
  songDurationState,
  homeSongsState,
};

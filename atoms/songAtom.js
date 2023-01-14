import { atom } from 'recoil';

/* Song is playing now ? */
const songIsPlayingState = atom({
  key: 'songIsPlayingState',
  default: false,
});

/*Current song elapsed playing time */
const elapsedPlayingState = atom({
  key: 'elapsedPlayingState',
  default: 0,
});

export { songIsPlayingState, elapsedPlayingState };

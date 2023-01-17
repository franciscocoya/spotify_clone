import { atom } from 'recoil';

/* Playlist where current song is playing */
const currentPlaylistState = atom({
  key: 'currentPlaylistState',
  default: 'lista1',
});

/* Previous song */
const previousSongState = atom({
  key: 'previousSongState',
  default: 'song0',
});

/* Next song */
const nextSongState = atom({
  key: 'nextSongState',
  default: 'song1',
});

export { songIsPlayingState };

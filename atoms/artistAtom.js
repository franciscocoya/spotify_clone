import { atom } from 'recoil';

/* If user selects suffle option */
const selectedArtistState = atom({
  key: 'selectedArtistState',
  default: {
    shortlink: '',
    id: '',
  },
});

export { selectedArtistState };
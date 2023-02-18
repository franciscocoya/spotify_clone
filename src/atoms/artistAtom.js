import { atom } from 'recoil';

/* If user selects suffle option */
const selectedArtistState = atom({
  key: 'selectedArtistState',
  default: {
    shortlink: '',
    id: '',
  },
});

/**
 * Authentication
 */
/* Artist password */
const artistEmailState = atom({
  key: 'artistEmailState',
  default: '',
});

/* Artist name */
const artistNameState = atom({
  key: 'artistNameState',
  default: '',
});

/* Artist bio */
const artistBioState = atom({
  key: 'artistBioState',
  default: '',
});

/* Artist password */
const artistPasswordState = atom({
  key: 'artistPasswordState',
  default: '',
});

/* Artist password */
const artistConfirmPasswordState = atom({
  key: 'artistConfirmPasswordState',
  default: '',
});

/* Artist page banner */
const artistPageBannerState = atom({
  key: 'artistPageBannerState',
  default: null,
});

export {
  selectedArtistState,
  artistNameState,
  artistBioState,
  artistPasswordState,
  artistConfirmPasswordState,
  artistEmailState,
  artistPageBannerState,
};

import { atom } from 'recoil';

/* Track to upload file content */
const trackToUploadDetailsState = atom({
  key: 'selectedArtistState',
  default: null,
});

/* Track to upload (blob) */
const trackBlobDataState = atom({
  key: 'trackBlobDataState',
  default: null,
});

/* Represents the cover of the track to upload */
const coverToUploadDetailsState = atom({
  key: 'coverToUploadDetailsState',
  default: null,
});

/* Represents the cover of the track to upload */
const trackUploadTitlePreviewState = atom({
  key: 'trackUploadTitlePreviewState',
  default: 'Title preview',
});

/* Represents the selected genre to apply for track */
const selectedMusicGenreState = atom({
  key: 'selectedMusicGenreState',
  default: '',
});

/* Represents if selected track is explicit */
const selectedTrackIsExplicit = atom({
  key: 'selectedTrackIsExplicit',
  default: false,
});

export {
  trackToUploadDetailsState,
  coverToUploadDetailsState,
  trackUploadTitlePreviewState,
  selectedMusicGenreState,
  selectedTrackIsExplicit,
  trackBlobDataState,
};

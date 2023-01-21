import {
  coverToUploadDetailsState,
  selectedMusicGenreState,
  selectedTrackIsExplicit,
  trackToUploadDetailsState,
  trackUploadTitlePreviewState,
} from '@atoms/uploadTrackAtom';
import { checkIsAudioFile } from '@utils/audioUtil';
import { checkIsImageFile, compressImage } from '@utils/imageUtil';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

function useUploadTrack() {
  // Track cover
  const [selectedCover, setSelectedCover] = useRecoilState(
    coverToUploadDetailsState
  );

  // Track title
  const [trackTitle, setTrackTitle] = useRecoilState(
    trackUploadTitlePreviewState
  );

  // Track file
  const [trackToUpload, setTrackToUpload] = useRecoilState(
    trackToUploadDetailsState
  );

  // Track genre
  const [selectedGenre, setSelectedGenre] = useRecoilState(
    selectedMusicGenreState
  );

  // Track is explicit?
  const [isExplicit, setIsExplicit] = useRecoilState(selectedTrackIsExplicit);

  // Drag and drop states
  const [coverUploadCompleted, setCoverUploadCompleted] = useState(false);
  const [trackUploadCompleted, setTrackUploadCompleted] = useState(false);

  const [coverUploadError, setCoverUploadError] = useState(false);
  const [trackUploadError, setTrackUploadError] = useState(false);

  // reset all track states
  const resetAudioStates = () => {
    setTrackUploadCompleted(false);
    setTrackToUpload(null);
    setTrackUploadError(false);
  };

  // Reset all cover states
  const resetCoverStates = () => {
    setCoverUploadCompleted(false);
    setSelectedCover(null);
    setCoverUploadError(false);
  };

  // Handle drop state
  const dropCover = (e) => {
    e.preventDefault();
    resetCoverStates();
    const data = e.dataTransfer.files[0];
    if (!checkIsImageFile(data)) {
      setCoverUploadError(true);
      return;
    }
    compressImage(data, 0.6, 640, 640, (result) => {
      setSelectedCover(result);
    });
  };

  // Handle drop state
  const dropAudio = (e) => {
    e.preventDefault();
    resetAudioStates();

    const data = e.dataTransfer.files[0];
    if (!checkIsAudioFile(data)) {
      setTrackUploadError(true);
      return;
    }

    changeUploadTrackFile(data);
    setTrackUploadCompleted(true);
  };

  // Prevent false-positives
  const allowDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Prevent upload more than one file.
  const admitOnlyOneFile = (e) => {
    if (e.target.files.length > 1 || !e.target.files) {
      return;
    }
  };

  // Handle upload cover from drag area.
  const handleUploadTrackCover = (e) => {
    e.preventDefault();
    admitOnlyOneFile(e);
    resetCoverStates();

    const file = e.target.files[0];
    if (!checkIsImageFile(file)) {
      setTrackUploadError(true);
      return;
    }

    compressImage(file, 0.6, 640, 640, (result) => {
      setSelectedCover(result);
      setCoverUploadCompleted(true);
    });
  };

  // Handle track file upload from drag area.
  const handleUploadTrackFile = (e) => {
    e.preventDefault();
    admitOnlyOneFile(e);
    resetAudioStates();

    const file = e.target.files[0];
    if (!checkIsAudioFile(file)) {
      setTrackUploadError(true);
      return;
    }

    changeUploadTrackFile(file);
    setTrackUploadCompleted(true);
  };

  // Aux function to change track file state
  const changeUploadTrackFile = (trackFile) => {
    const tempURL = URL.createObjectURL(trackFile);
    const tempAudio = new Audio();
    tempAudio.src = tempURL;
    tempAudio.addEventListener('loadedmetadata', () => {
      setTrackToUpload(tempAudio);
    });
  };

  // Change title preview
  const changeTrackTitlePreview = (e) => {
    setTrackUploadCompleted(false);
    setTrackTitle(e.target.value);
    setTrackUploadCompleted(true);
  };

  // Handle the selected music genre.
  const handleSelectGenre = (e) => {
    if (!e.target.value) {
      return;
    }
    setSelectedGenre(e.target.value);
  };

  // Handle the selected value from explicit content radio buttons.
  const handleSelectIsExplicitContent = (e, isExplicit) => {
    setIsExplicit(isExplicit);
  };

  // Upload files to upload.
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(
      selectedCover,
      trackTitle,
      trackToUpload,
      selectedGenre,
      isExplicit,
      coverUploadError,
      trackUploadError
    );
  };

  return {
    dropCover,
    allowDrop,
    handleUploadTrackCover,
    handleUploadTrackFile,
    selectedCover,
    trackTitle,
    changeTrackTitlePreview,
    trackToUpload,
    handleUpload,
    handleSelectGenre,
    handleSelectIsExplicitContent,
    dropAudio,
    trackUploadCompleted,
    coverUploadCompleted,
    trackUploadError,
    coverUploadError,
  };
}

export default useUploadTrack;

import {
  coverToUploadDetailsState,
  selectedMusicGenreState,
  selectedTrackIsExplicit,
  trackBlobDataState,
  trackToUploadDetailsState,
  trackUploadTitlePreviewState,
} from '@atoms/uploadTrackAtom';
import { uploadTrackRoute } from '@lib/apiRoutes';
import { checkIsAudioFile } from '@utils/audioUtil';
import { checkIsImageFile, compressImage } from '@utils/imageUtil';
import axios from 'axios';
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

  // Track blob
  const [trackBlobData, setTrackBlobData] = useRecoilState(trackBlobDataState);

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

  const [isUploading, setIsUploading] = useState({
    loading: false,
    finished: false,
  });

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

    setTrackBlobData(data);
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

    setTrackBlobData(file);
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
  const handleSelectGenre = (value) => {
    if (!value) {
      return;
    }
    setSelectedGenre(value);
  };

  // Handle the selected value from explicit content radio buttons.
  const handleSelectIsExplicitContent = (e, isExplicit) => {
    setIsExplicit(isExplicit);
  };

  // Handle the files upload.
  const handleUpload = async (e) => {
    e.preventDefault();

    setIsUploading({
      loading: true,
      finished: false,
    });

    if (!trackToUpload || !trackTitle) {
      return;
    }

    const data = new FormData();
    data.append('track', trackBlobData);
    data.append('cover', trackBlobData);
    data.append('title', trackTitle);
    data.append('genre', selectedGenre);
    data.append('explicit', isExplicit);

    await axios
      .post(uploadTrackRoute, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res) {
          setIsUploading({
            loading: false,
            finished: true,
          });
        }
      });
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
    isUploading,
  };
}

export default useUploadTrack;

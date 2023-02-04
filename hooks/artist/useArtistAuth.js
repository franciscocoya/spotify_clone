import {
  artistBioState,
  artistConfirmPasswordState,
  artistEmailState,
  artistNameState,
  artistPageBannerState,
  artistPasswordState,
} from '@atoms/artistAtom';
import { create } from '@services/artistCrudService';
import { checkIsImageFile, compressImage } from '@utils/imageUtil';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const BANNER_WIDTH = 1900; // Artist page banner default width
const BANNER_HEIGHT = 500; // Artist page banner default height

function useArtistAuth() {
  const [name, setName] = useRecoilState(artistNameState);
  const [email, setEmail] = useRecoilState(artistEmailState);
  const [password, setPassword] = useRecoilState(artistPasswordState);
  const [confirmPassword, setConfirmPassword] = useRecoilState(
    artistConfirmPasswordState
  );
  const [bio, setBio] = useRecoilState(artistBioState);
  const [pageBanner, setPageBanner] = useRecoilState(artistPageBannerState);

  const [loading, setLoading] = useState(false); // Represent the create account proccess

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
  });

  const checkInput = (e) => {
    if (!e.target.value) {
      return;
    }
  };

  // Change name state
  const handleName = (e) => {
    checkInput(e);
    setName(e.target.value);
  };

  // Change email state
  const handleEmail = (e) => {
    checkInput(e);
    setEmail(e.target.value);
  };

  // Change email state
  const handleBio = (e) => {
    checkInput(e);
    setBio(e.target.value);
  };

  // Change password state
  const handlePassword = (e) => {
    checkInput(e);
    setPassword(e.target.value);
  };

  // Change confirm password state
  const handleConfirmPassword = (e) => {
    checkInput(e);
    setConfirmPassword(e.target.value);
  };

  // Handle banner drop state
  const handleDropBanner = (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 1) {
      return;
    }

    setPageBanner(null);

    const data = e.dataTransfer.files[0];
    if (!checkIsImageFile(data)) {
      return;
    }

    compressImage(data, 0.6, BANNER_WIDTH, BANNER_HEIGHT, (result) => {
      setPageBanner(result);
    });
  };

  // Enable drop action
  const allowDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle change event on drag & drop component to choose page banner
  const handleBannerInputChange = (e) => {
    if (!e.target.files || e.target.files.length > 1) {
      return;
    }

    setPageBanner(null);

    const data = e.target.files[0];
    if (!checkIsImageFile(data)) {
      return;
    }

    compressImage(data, 0.6, BANNER_WIDTH, BANNER_HEIGHT, (result) => {
      setPageBanner(result);
    });
  };

  // Remove current banner when user click on times icon (under drag & drop component)
  const removeCurrentBanner = (e) => {
    e.preventDefault();
    setPageBanner(null);
  };

  // Create a new artist account with the previous states
  const createArtistAccount = async () => {
    if (!name || !email || !password || !confirmPassword) {
      return;
    }

    setLoading(true);

    await create(
      {
        name,
        email,
        password,
        bio,
        pageBanner,
      },
      (errors) => {
        if (!errors) {
          return;
        }

        errors.forEach((key, value) => {});

        console.log('errors: ' + errors.values().next().value);
      }
    );
    // .then((res) => {
    //   if (res) {
    //     setLoading(false);
    //   }
    // });
  };

  return {
    handleName,
    handleEmail,
    handleBio,
    createArtistAccount,
    handlePassword,
    handleConfirmPassword,
    handleDropBanner,
    allowDrop,
    handleBannerInputChange,
    loading,
    pageBanner,
    removeCurrentBanner,
  };
}

export default useArtistAuth;

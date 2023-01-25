import { selectedArtistState } from '@atoms/artistAtom';
import { useRecoilState } from 'recoil';

function useArtist() {
  const [selectedArtist, setSelectedArtist] =
    useRecoilState(selectedArtistState);

  return {
    selectedArtist,
    setSelectedArtist,
  };
}

export default useArtist;

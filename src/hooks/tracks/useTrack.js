import { homeSongsState } from '@atoms/SongAtom';
import { getLimitedTracks } from '@services/trackCrudService';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

async function useTrack() {
  const [homeSongs, setHomeSongs] = useRecoilState(homeSongsState);

  const loadHomeTracks = async () => {
    const tracks = await getLimitedTracks();
    console.log(tracks);
    setHomeSongs(tracks);
  };

  return {
    homeSongs,
  };
}

export default useTrack;

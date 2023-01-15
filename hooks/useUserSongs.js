import { homeSongsState } from '@atoms/SongAtom';
import { useRecoilState } from 'recoil';

async function useUserSongs() {
  const [songs, setSongs] = useRecoilState(homeSongsState);

  // useEffect(() => {
  //   const loadSongs = async () => {
  //     const result = await axios.get('/api/song/all');
  //     setSongs(result.data.songs);
  //   };

  //   loadSongs();
  // }, []);

  return {
    songs,
    setSongs,
  };
}

export default useUserSongs;

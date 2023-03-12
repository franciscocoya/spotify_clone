import { getLimitedTracks } from '@/api/trackCrudService';
import { homeSongsState } from '@/atoms/SongAtom';
import BaseLayout from '@/components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@/components/layouts/MetadataLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRecoilState } from 'recoil';
function Home() {
  const router = useRouter();
  const intl = useIntl();
  const [songs, setSongs] = useRecoilState(homeSongsState);
  //const authContext = useContext(AuthContext);

  useEffect(() => {
    const loadSongs = async () => {
      const result = await getLimitedTracks(5);
      setSongs(result);
    };

    if (!songs || songs.length == 0) {
      loadSongs();
    }
  }, []);

  return (
    <>
      <MetadataLayout
        title={intl.formatMessage({ id: 'page.home.metadata.title' })}
      >
        <BaseLayout showGradient={true} currentColor={'rgb(24, 208, 96)'}>
          <div>
            {/* {songs &&
              songs?.map((song, index) => (
                <TrackCard
                  key={index}
                  position={index + 1}
                  title={song.title}
                  album={song?.album?.name}
                  artist={song?.performedBy && song?.performedBy[0]?.artistId}
                  createdAt={song.releaseDate}
                  cover={song.cover}
                />
              ))} */}
            {/* <CardSection /> */}
            {/* <p>{songs?.length}</p> */}
            {/* <TrackCard />
            <TrackCard />
            <TrackCard /> */}
          </div>
          {/* <BaseButton
            type="button"
            text={'sign out'}
            style="outlined"
            color={'#FFFFFF'}
            rounded
            action={() => setCookie('logged', false)}
          /> */}
        </BaseLayout>
      </MetadataLayout>
      <style jsx>{``}</style>
    </>
  );
}

export default Home;

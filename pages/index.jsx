import { homeSongsState } from '@atoms/SongAtom';
import CardSection from '@components/CardSection';
import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@components/layouts/MetadataLayout';
import { useIntl } from 'react-intl';
import { useRecoilState } from 'recoil';

function Home() {
  const intl = useIntl();
  const [songs, setSongs] = useRecoilState(homeSongsState);

  // useEffect(() => {
  //   const loadSongs = async () => {
  //     const result = await axios.get('/api/song/all');
  //     setSongs(result.data.songs);
  //   };

  //   loadSongs();
  // }, []);

  return (
    <>
      <MetadataLayout
        title={intl.formatMessage({ id: 'page.home.metadata.title' })}
      >
        <BaseLayout showGradient={true} currentColor={'rgb(24, 208, 96)'}>
          <div>
            {/* {
              songs && songs?.map(((song, index) => (
                <p key={index}>{song}</p>
              )))
            } */}
            <CardSection />
            {/* <p>{songs?.length}</p> */}
          </div>
        </BaseLayout>
      </MetadataLayout>
      <style jsx>{``}</style>
    </>
  );
}

export default Home;

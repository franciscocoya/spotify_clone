import { homeSongsState } from '@atoms/SongAtom';
import BaseButton from '@components/buttons/BaseButton';
import CardSection from '@components/CardSection';
import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@components/layouts/MetadataLayout';
import { AuthContext } from '@context/authContext';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useIntl } from 'react-intl';
import { useRecoilState } from 'recoil';

function Home() {
  const router = useRouter();
  const intl = useIntl();
  const [songs, setSongs] = useRecoilState(homeSongsState);
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   // if (getCookie('logged') === false) {
  //   //   router.push('/login')
  //   // }
  //   console.log('cookie: ' + getCookie('logged').toString() + ' ' + typeof getCookie('logged'));
  // }, [])

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
          <BaseButton
            type="button"
            text={'sign out'}
            style="outlined"
            color={'#FFFFFF'}
            rounded
            action={() => setCookie('logged', false)}
          />
        </BaseLayout>
      </MetadataLayout>
      <style jsx>{``}</style>
    </>
  );
}

export default Home;

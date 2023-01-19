import ArtistBanner from '@components/banners/ArtistBanner';
import FollowButton from '@components/buttons/FollowButton';
import PlayBigButton from '@components/buttons/PlayBigButton';
import CardSection from '@components/CardSection';
import BaseLayout from '@components/layouts/BaseLayoutWithSidebar';
import MetadataLayout from '@components/layouts/MetadataLayout';
import variables from '@styles/variables.module.scss';
import { useIntl } from 'react-intl';

function ArtistSingle({ ...props }) {
  const intl = useIntl();

  // useEffect(() => {
  //   const loadArtistData = async () => {
  //     const data = await getArtistNameById(props?.artist);
  //     console.log(data);
  //     setArtistName(data);
  //   };
  //   loadArtistData();
  // }, []);

  return (
    <>
      <MetadataLayout
        title={`${props?.name} · ${intl.formatMessage({
          id: 'page.artist.metadata.title',
        })}`}
      />
      <BaseLayout showGradient={false}>
        <ArtistBanner />
        <section className="singleArtist__container">
          <div className="artist-follow-button">
            <PlayBigButton action={null} />
            <FollowButton action={null} />
          </div>
          <div className="artist-biography">
            <p>
              Leire Martínez (voz), Xabi San Martín (teclados), Pablo Benegas
              (guitarra), Haritz Garde (batería) y Álvaro Fuentes (bajo)
              continúan en lo más alto después de 22 años de éxitos. Procedentes
              de Donostia - San Sebastián, siguen siendo una de las bandas
              referentes del pop en español con incontables números 1 y más de
              50 discos de oro y de platino. Con nueve discos de estudio, varios
              recopilatorios y álbumes en directo ha recibido además del cariño
              de su público, innumerables premios internacionales y nacionales,
              Premios MTV, Premios 40 Principales, Premios Ondas, premios y
              nominaciones internacionales como Antorchas, Gaviota de plata y
              Premio lo Nuestro. En 2006 obtuvieron el Grammy Latino a Mejor
              Álbum Pop en 2006 por . Sus giras recorren la geografía española,
              Latinoamérica, Centroamérica y las principales ciudades de Estados
              Unidos y Europa. Su último tour, con más de 100 conciertos, colgó
              el cartel de entradas agotadas en prácticamente todas las fechas.
              Su música sigue dando la vuelta al mundo y lo confirman sus más de
              ocho millones de discos vendidos en todo el globo y su legión de
              fans en redes sociales. En enero de 2020 la banda ha terminado de
              grabar su próximo disco, el décimo de estudio, producido por Paco
              Salazar y grabado en Du Manoir, Francia. Su primer adelanto, , es
              un tema de pop-rock épico, y como lo definen ellos: «una historia
              de amor desgastado, pero de esperanza donde solo juntos es posible
              salir adelante».
            </p>
          </div>
          <CardSection />
          <CardSection />
          <CardSection />
          <CardSection />
          <CardSection />
        </section>
      </BaseLayout>

      <style jsx>{`
        .singleArtist__container {
          position: relative;
          background-color: ${variables.bodyBgDarkColor};
          padding: 40px;
        }

        .artist-follow-button {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 30px;
        }

        .artist-biography {
          margin-top: 30px;
        }
      `}</style>
    </>
  );
}

export default ArtistSingle;

import variables from '@styles/variables.module.scss';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { MdVerified } from 'react-icons/md';

function ArtistBanner({ ...props }) {
  const [lastScroll, setLastScroll] = useState(0); // Record window last scroll position
  const [backgroundScale, setBackgroundScale] = useState(1);
  const overlay = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    gsap.to('.artist-banner__background', {
      duration: 1,
      backgroundPositionY: 5,
      backgroundScale: 2,
      scrollTrigger: {
        trigger: '.artist-banner',
        scrub: true,
      },
    });

    gsap.to('.artist-banner__overlay', {
      duration: 1,
      opacity: 0.8,
      scrollTrigger: {
        trigger: '.artist-banner',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="artist-banner">
        <section>
          <div
            className="artist-banner__background"
            ref={background}
            id={`banner-background`}
          ></div>
          <div
            className="artist-banner__overlay"
            ref={overlay}
            id={`banner-overlay`}
          ></div>
          <div className="artist-banner__wrapper">
            <div className="artist-banner__wrapper--verified">
              <MdVerified size={32} fill={variables.verifiedColor} />
              <span>Verified artist</span>
            </div>
            <h1>La oreja de Van Gogh</h1>
          </div>
        </section>
      </div>
      <style jsx>{`
        .artist-banner {
          position: relative;
          top: 0;
          height: 35vh;
          min-height: 350px;
          width: 100%;
          margin-top: -${variables.topbarHeight};
          z-index: ${variables.zIndexBannerContent};
        }

        section {
          position: relative;
          height: 100%;
        }

        .artist-banner__wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          z-index: 3;
          height: 100%;
        }

        .artist-banner__wrapper--verified {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        }

        .artist-banner__wrapper > h1 {
          font-size: 5rem;
          color: ${variables.whiteColor};
        }

        .artist-banner__background,
        .artist-banner__overlay {
          position: fixed;
          width: 100%;
          height: 40vh;
          left: 0;
          top: 0;
        }

        .artist-banner__background {
          background-image: url('${'https://diariocorreo.pe/resizer/r1QsB_o9bKCtyfhIihCDba4ml5M=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Y3LOAGZNKVDXXDATDEVEMSMH6E.jpg'}');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          z-index: ${variables.zIndexBannerBackground};
        }

        .artist-banner__overlay {
          background-color: ${variables.blackColorTransparent};
          opacity: 0.4;
          z-index: ${variables.zIndexBannerOverlay};
        }
      `}</style>
    </>
  );
}

export default ArtistBanner;

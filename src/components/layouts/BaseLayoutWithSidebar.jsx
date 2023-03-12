import BasePlayer from '@/components/BasePlayer';
import BaseSidebar from '@/components/BaseSidebar';
import BaseToolbar from '@/components/BaseToolbar';
import variables from '@/styles/variables.module.scss';

function BaseLayout({ children, ...props }) {
  return (
    <>
      <div className="mainWrapper">
        <BaseToolbar />
        <BaseSidebar className="baseSidebar" />
        <div className="main-content-area">
          {props.showGradient && <div className="section-gradient"></div>}
          {children}
        </div>
        <BasePlayer />
      </div>

      <style jsx>{`
        .mainWrapper {
          position: relative;
          width: 100%;
          min-height: 100%;
          height: 100%;
          display: grid;
          grid-template-areas:
            'sidebar top-toolbar'
            'sidebar main-content'
            'playing-bar playing-bar';
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr auto;
        }

        .main-content-area {
          grid-area: main-content;
        }

        #base-layout-main {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .section-gradient {
          width: 100vw;
          height: 400px;
          background: ${props.currentColor};
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.6) 0,
              ${variables.bodyBgDarkColor} 100%
            ),
            ${variables.gradientNoise};
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
      `}</style>
    </>
  );
}

export default BaseLayout;

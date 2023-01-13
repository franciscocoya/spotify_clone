import BasePlayer from '@components/BasePlayer';
import BaseSidebar from '@components/BaseSidebar';
import BaseToolbar from '@components/BaseToolbar';

function BaseLayout({ children }) {
  return (
    <>
      <div className="mainWrapper">
        <BaseToolbar />
        <BaseSidebar className="baseSidebar" />
        <div className="main-content-area">{children}</div>
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
      `}</style>
    </>
  );
}

export default BaseLayout;

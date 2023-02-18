import variables from '@styles/variables.module.scss';

function PlaylistCardSummary({ ...props }) {
  return (
    <>
      <div className="playlist-card-summary-container">
        <div className="playlist-card-summary-container__thumbnail">
          {/* playlist thumbnail */}
          <img src={props.thumbnail} alt="" width="165px" height="165px" />
          {/* Play button */}
          <div className=""></div>
        </div>
        <div className="playlist-card-summary-container__details">
          <h3>{props.title}</h3>
          <p>{props.shortSummary}</p>
        </div>
      </div>
      <style jsx>{`
        .playlist-card-summary-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 5px;
          padding: 15px;
          background-color: ${variables.darkMidGrayColor};
          border-radius: ${variables.cardBorderRadius};
        }

        .playlist-card-summary-container
          > .playlist-card-summary-container__thumbnail {
          position: relative;
        }

        .playlist-card-summary-container__thumbnail > img {
          border-radius: ${variables.cardBorderRadius};
          box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
          user-select: none;
        }

        .playlist-card-summary-container__details > h3 {
          font-size: 1rem;
          font-weight: 600;
        }

        .playlist-card-summary-container__details > p {
          font-weight: 300;
        }
      `}</style>
    </>
  );
}

export default PlaylistCardSummary;

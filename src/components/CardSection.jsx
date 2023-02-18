import PlaylistCardSummary from '@components/cards/PlaylistCardSummary';

function CardSection({ ...props }) {
  return (
    <>
      <section>
        <PlaylistCardSummary
          thumbnail="/images/sample1.jfif"
          title="Playlist 1"
          shortSummary="short description 1..."
        />
        <PlaylistCardSummary
          thumbnail="/images/sample2.jfif"
          title="Playlist 2"
          shortSummary="short description 2..."
        />
        <PlaylistCardSummary
          thumbnail="/images/sample2.jfif"
          title="Playlist 3"
          shortSummary="short description 3..."
        />
        {/* {
        songs && songs?.map(((song, index) => (
          <PlaylistCardSummary key={index} />
          <p key={index}>{song}</p>
        )))
      } */}
      </section>
      <style jsx>{`
      section{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
        flex-wrap; wrap;
      }
    `}</style>
    </>
  );
}

export default CardSection;

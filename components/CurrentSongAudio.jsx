function CurrentSongAudio({ ...props }) {
  return (
    <>
      <audio ref={props.audioPlayerRef} onTimeUpdate={props.onTimeUpdateAction}>
        <source src={props.currentSong} />
      </audio>
      <style jsx>{`
        audio {
          display: none;
        }
      `}</style>
    </>
  );
}

export default CurrentSongAudio;

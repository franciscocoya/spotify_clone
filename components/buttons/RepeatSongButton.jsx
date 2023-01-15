import AudioControlButton from "@components/AudioControlButton";
import useAudioPlayer from "@hooks/useAudioPlayer";
import variables from '@styles/variables.module.scss';
import { RiRepeatLine } from "react-icons/ri";

function RepeatSongButton({ ...props }) {
  const { toogleRepeatCurrentSong, repeatCurrentSong } = useAudioPlayer();

  return (
    <>
      <div className="repeat-current-song-button">
        <AudioControlButton action={toogleRepeatCurrentSong}>
          <RiRepeatLine size="24px" fill={repeatCurrentSong ? variables.primaryColorEmphasis : variables.whiteColor} />
        </AudioControlButton>
        {
          repeatCurrentSong && <div className="repeat-active"></div>
        }
      </div>

      <style jsx>{`
        .repeat-current-song-button{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .repeat-current-song-button:hover > .repeat-active{
          opacity: 0.9;
        }
        
        .repeat-active{
          position: absolute;
          bottom: -5px;
          width: 5px;
          height: 5px;
          border-radius: 30px;
          background-color: ${variables.primaryColorEmphasis};
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}

export default RepeatSongButton;
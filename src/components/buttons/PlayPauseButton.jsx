import AudioControlButton from '@/components/AudioControlButton';
import variables from '@/styles/variables.module.scss';
import { BiPlay } from 'react-icons/bi';
import { GiPauseButton } from 'react-icons/gi';

function PlayPauseButton({ ...props }) {
  return (
    <AudioControlButton
      stackedIcon={true}
      growIcon={true}
      action={props.action}
    >
      {props.isPlaying ? (
        <GiPauseButton size="20px" fill={variables.darkMidGrayColor} />
      ) : (
        <BiPlay
          size="32px"
          fill={variables.darkMidGrayColor}
          viewBox="0 0 20 24"
        />
      )}
    </AudioControlButton>
  );
}

export default PlayPauseButton;

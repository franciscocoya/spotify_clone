import AudioControlButton from '@components/AudioControlButton';
import variables from '@styles/variables.module.scss';
import { IoIosSkipForward } from 'react-icons/io';

function NextSongButton({ ...props }) {
  return (
    <AudioControlButton action={props.action}>
      <IoIosSkipForward size="24px" fill={variables.whiteColor} />
    </AudioControlButton>
  );
}

export default NextSongButton;

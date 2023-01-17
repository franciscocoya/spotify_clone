import AudioControlButton from '@components/AudioControlButton';
import variables from '@styles/variables.module.scss';
import { TbArrowsSplit2 } from 'react-icons/tb';

function SufflePlayButton({ ...props }) {
  return (
    <AudioControlButton action={props.action}>
      <TbArrowsSplit2 size="24px" fill={variables.whiteColor} />
    </AudioControlButton>
  );
}

export default SufflePlayButton;

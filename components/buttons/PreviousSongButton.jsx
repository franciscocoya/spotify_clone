import AudioControlButton from "@components/AudioControlButton";
import variables from '@styles/variables.module.scss';
import { IoIosSkipBackward } from "react-icons/io";

function PreviousSongButton({ ...props }) {
  return (
    <AudioControlButton action={props.action}>
      <IoIosSkipBackward size="24px" fill={variables.whiteColor} />
    </AudioControlButton>
  );
}

export default PreviousSongButton;
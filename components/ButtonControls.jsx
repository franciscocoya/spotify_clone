import AudioControlButton from '@components/AudioControlButton';
import { ArrowPathRoundedSquareIcon, ArrowTrendingUpIcon, BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/solid';
import variables from '@styles/variables.module.scss';

function Controls({ ...props }) {
  return (
    <>
      <div className='audio-control-buttons'>
        {/* Suffle */}
        <AudioControlButton action={null}>
          <ArrowTrendingUpIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Previuos song */}
        <AudioControlButton action={null}>
          <BackwardIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Play */}
        <AudioControlButton action={null} stackedIcon={true} growIcon={true}>
          <PlayIcon width={20} fill={variables.darkMidGrayColor} viewBox="0 0 20 20" />
          {/* <PauseIcon width={24} fill={variables.darkMidGrayColor} viewBox="0 0 20 20" /> */}
        </AudioControlButton>

        {/* Next song */}
        <AudioControlButton action={null}>
          <ForwardIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Repeat current song */}
        <AudioControlButton action={null}>
          <ArrowPathRoundedSquareIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>
      </div>
      <style jsx>{`
          .audio-control-buttons{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 15px;
          }
      `}</style>
    </>);
}

export default Controls;
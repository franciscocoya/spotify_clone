import { songIsPlayingState } from '@atoms/songAtom';
import AudioControlButton from '@components/AudioControlButton';
import {
  ArrowPathRoundedSquareIcon,
  ArrowTrendingUpIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';
import variables from '@styles/variables.module.scss';
import { useRecoilState } from 'recoil';

function Controls({ ...props }) {
  const [isPlaying, setIsPlaying] = useRecoilState(songIsPlayingState);

  const toogleIsPlaying = (e) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="audio-control-buttons">
        {/* Suffle */}
        <AudioControlButton>
          <ArrowTrendingUpIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Previuos song */}
        <AudioControlButton>
          <BackwardIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Play */}
        <AudioControlButton
          action={toogleIsPlaying}
          stackedIcon={true}
          growIcon={true}
        >
          {isPlaying ? (
            <PauseIcon width={24} fill={variables.darkMidGrayColor} />
          ) : (
            <PlayIcon
              width={20}
              fill={variables.darkMidGrayColor}
              viewBox="0 0 20 24"
            />
          )}
        </AudioControlButton>

        {/* Next song */}
        <AudioControlButton>
          <ForwardIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>

        {/* Repeat current song */}
        <AudioControlButton>
          <ArrowPathRoundedSquareIcon width={24} fill={variables.whiteColor} />
        </AudioControlButton>
      </div>
      <style jsx>{`
        .audio-control-buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
      `}</style>
    </>
  );
}

export default Controls;

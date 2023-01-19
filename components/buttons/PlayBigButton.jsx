import variables from '@styles/variables.module.scss';
import { IoPlaySharp } from 'react-icons/io5';

function PlayBigButton({ ...props }) {
  return (
    <>
      <button onClick={props.action || '#'}>
        <IoPlaySharp
          size={32}
          fill={variables.bodyBgDarkColor}
          style={{
            transform: 'translateX(2px) translateY(2px)',
          }}
        />
      </button>
      <style jsx>{`
        button {
          width: 64px;
          height: 64px;
          place-items: center;
          background-color: ${variables.primaryColorEmphasis};
          padding: 10px;
          border-radius: 200px;
          transition: transform 0.1s 0s linear;
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}

export default PlayBigButton;

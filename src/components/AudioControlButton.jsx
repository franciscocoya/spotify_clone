import variables from '@/styles/variables.module.scss';

function AudioControlButton({ children, ...props }) {
  return (
    <>
      <button onClick={props.action}>{children}</button>
      <style jsx>{`
        button {
          width: 32px;
          height: 32px;
          appereance: none;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${props.stackedIcon
            ? variables.whiteColor
            : 'transparent'};
          border-radius: 50px;
          opacity: ${props.stackedIcon ? 1 : 0.6};
        }

        button:hover {
          transform: ${props.growIcon && 'scale(1.1)'};
          opacity: 1;
        }
      `}</style>
    </>
  );
}

export default AudioControlButton;

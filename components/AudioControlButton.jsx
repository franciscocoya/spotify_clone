import variables from '@styles/variables.module.scss';

function AudioControlButton({ children, ...props }) {
  return (
    <>
      <button onClick={props.action}>{children}</button>
      <style jsx>{`
        button{
          width: 32px;
          height: 32px;
          place-items: center;
          background-color: ${props.stackedIcon ? variables.whiteColor : 'transparent'};
          border-radius: 50px;
        }

        button:hover{
          transform: ${props.growIcon && 'scale(1.1)'};
        }

      `}</style>
    </>

  )
}

export default AudioControlButton;
import {
  darkBlackColor,
  errorColor,
  primaryColorEmphasis,
  whiteColor,
} from '@/styles/variables.module.scss';
import { useEffect, useRef } from 'react';

function BaseMessage({ ...props }) {
  const msg = useRef(null);

  const changeColor = (backgroundColor, color) => {
    msg.current.style.backgroundColor = backgroundColor;
    msg.current.style.color = color;
  };

  const configMessage = () => {
    if (!props.type) {
      return;
    }

    if (props.type === 'success') {
      changeColor(primaryColorEmphasis, darkBlackColor);
    } else if (props.type === 'error') {
      changeColor(errorColor, whiteColor);
    }
  };

  useEffect(() => {
    configMessage();
  }, []);

  return (
    <>
      <div className="base-msg" ref={msg}>
        {props.content}
      </div>
      <style jsx>{`
        .base-msg {
          position: fixed;
          width: 50%;
          height: 50px;
          left: 0;
          bottom: 115px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-size: 1.1rem;
          transform: translateX(50%);
        }
      `}</style>
    </>
  );
}

export default BaseMessage;

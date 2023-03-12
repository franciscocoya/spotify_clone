import {
  popupColorTransparent,
  whiteColor,
} from '@/styles/variables.module.scss';
import { useEffect, useRef } from 'react';
function PopupMessage({ ...props }) {
  const popup = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      popup.current.style.display = 'none';
    }, props.duration);
  }, []);

  return (
    <>
      <div className="popup-msg" ref={popup}>
        {props.content}
      </div>
      <style jsx>{`
        .popup-msg {
          width: 300px;
          background-color: ${popupColorTransparent};
          backdrop-filter: blur(5px);
          padding: 10px;
          border-radius: 100px;
          text-align: center;
          margin: 20px auto;
          align-self: center;
          color: ${whiteColor};
          animation: fadeIn 0.4s;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default PopupMessage;

import PopupMessage from '@components/messages/PopupMessage';
import {
  primaryColorEmphasis,
  primaryColorEmphasisTransparent,
  whiteColor,
} from '@styles/variables.module.scss';
import { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';

function BaseDragAndDropArea({ ...props }) {
  const intl = useIntl();

  const dragArea = useRef(null);

  const highlight = () => {
    dragArea.current.style.borderColor = whiteColor;
  };

  const unhighlight = () => {
    dragArea.current.style.borderColor = primaryColorEmphasis;
  };

  useEffect(() => {
    const attachEvents = () => {
      ['dragleave', 'drop'].forEach((eventName) => {
        dragArea.current.addEventListener(eventName, unhighlight, false);
      });

      ['dragenter', 'dragover'].forEach((eventName) => {
        dragArea.current.addEventListener(eventName, highlight, false);
      });
    };

    attachEvents();
  }, []);

  return (
    <>
      <div className="drag-and-drop-area__wrapper">
        <div
          ref={dragArea}
          className="drag-and-drop-area"
          onDrop={props.drop}
          onDragOver={props.allowDrop}
          style={props.styles}
        >
          <span>
            <label htmlFor={props.id}>
              {intl.formatMessage({ id: 'components.buttons.clickHere' })}
            </label>
            {props.text}
          </span>
          <span className="track-upload-mimes-info">
            {props.allowedFormats}
          </span>
          {/* <form action="#" onSubmit={null}> */}
          <input
            type="file"
            name={props.name}
            id={props.id}
            accept={props.accept}
            onChange={props.handleChange}
          />
        </div>
        {props.dropCompleted ||
          (props.error && (
            <PopupMessage
              content={props.dropCompletedMessage}
              duration={3000}
            />
          ))}
      </div>

      <style jsx>{`
        .drag-and-drop-area {
          position: relative;
          width: 350px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          background-color: ${primaryColorEmphasisTransparent};
          border: 5px dashed ${primaryColorEmphasis};
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .drag-and-drop-area > span:not(.track-upload-mimes-info),
        .drag-and-drop-area label {
          font-size: 1.2rem;
          color: ${primaryColorEmphasis};
        }

        .drag-and-drop-area label {
          text-decoration: underline;
          margin-right: 10px;
          color: ${whiteColor};
          cursor: pointer;
        }

        #${props.id} {
          display: none;
        }

        .track-upload-cover > .track-upload-mimes-info {
          font-size: 0.8rem;
          color: ${primaryColorEmphasis};
        }
      `}</style>
    </>
  );
}

export default BaseDragAndDropArea;

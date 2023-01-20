import variables from '@styles/variables.module.scss';
import { useRef } from 'react';

function BaseDragAndDropArea({ ...props }) {
  const dragArea = useRef(null);

  const drop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
  };

  const drag = (e) => {
    e.dataTransfer.setData('text', e.target.id);
    dragArea.current.style.borderColor = variables.primaryColorEmphasis;
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    dragArea.current.style.borderColor = variables.whiteColor;
  };

  const handleDragLeave = (e) => {
    dragArea.current.style.borderColor = variables.primaryColorEmphasis;
  };

  return (
    <>
      <div
        ref={dragArea}
        className="drag-and-drop-area"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        ondrop={drop}
        ondragover={allowDrop}
        ondragstart={drag}
        draggable="true"
      >
        <span>
          <label htmlFor="track-upload-cover">Click here</label>
          or drag & drop jpeg, png, webp Maximum file size 5MB
        </span>
        <span className="track-upload-mimes-info">jpeg, png, webp</span>
        <form action="#" onSubmit={null}>
          <input
            type="file"
            name="track-upload-cover"
            id="track-upload-cover"
            accept="image/*"
          />
        </form>
      </div>
      <style jsx>{`
        .drag-and-drop-area {
          width: 350px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          background-color: ${variables.primaryColorEmphasisTransparent};
          border: 5px dashed ${variables.primaryColorEmphasis};
          border-radius: 20px;
          padding: 30px;
        }

        .drag-and-drop-area > span:not(.track-upload-mimes-info),
        .drag-and-drop-area label {
          font-size: 1.2rem;
          color: ${variables.primaryColorEmphasis};
        }
        .drag-and-drop-area label {
          text-decoration: underline;
          margin-right: 10px;
          color: ${variables.whiteColor};
          cursor: pointer;
        }

        #track-upload-cover {
          display: none;
        }

        .track-upload-cover > .track-upload-mimes-info {
          font-size: 0.8rem;
          color: ${variables.primaryColorEmphasis};
        }
      `}</style>
    </>
  );
}

export default BaseDragAndDropArea;

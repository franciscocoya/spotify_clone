import {
  darkGrayColor,
  errorColor,
  whiteColor,
} from '@styles/variables.module.scss';

function TextAreaInput({ ...props }) {
  return (
    <>
      <div className="textarea-container">
        <label htmlFor={props.name}>{props.label}</label>
        <textarea
          name={props.name}
          cols="30"
          rows="20"
          maxLength={800}
          placeholder={props.placeholder}
          className={props.light && 'light-appereance'}
          onInput={props.handleInput}
          required={props.isRequired}
        ></textarea>
      </div>
      <style jsx>{`
      .textarea-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }

      label {
          color: ${whiteColor}
          margin-bottom: 5px;
        }

        textarea {
          min-width: 100%;
          width: 100%;
          max-width: 100%;
          min-height: 200px;
          height: 200px;
          max-height: 500px;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          background: transparent;
          border: none;
          border-radius: 4px;
          padding: 14px;
          box-shadow: inset 0 0 0 1px ${darkGrayColor};
        }

        textarea:invalid{
          border: 1px solid ${errorColor};
        }

        .light-appereance{
          border: 1px solid ${whiteColor};
        }
    `}</style>
    </>
  );
}

export default TextAreaInput;

import { whiteColor } from '@styles/variables.module.scss';

function BaseRadioButton({ ...props }) {
  return (
    <>
      <div className="base-radio-button">
        <input
          type="radio"
          name={props.name}
          defaultChecked={props.chequed}
          onChange={props.onchange}
        />
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <style jsx>{`
        .base-radio-button {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }

        input[type='radio'] {
          appearance: none;
          font: inherit;
          color: currentColor;
          width: 1.15em;
          height: 1.15em;
          border: 0.1em solid ${whiteColor};
          border-radius: 50%;
          transform: translateY(-0.05em);
          display: grid;
          place-content: center;
        }

        input[type='radio']::before {
          content: '';
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em var(${whiteColor});
          background-color: ${whiteColor};
        }

        input[type='radio']:checked::before {
          transform: scale(1);
        }
      `}</style>
    </>
  );
}

export default BaseRadioButton;

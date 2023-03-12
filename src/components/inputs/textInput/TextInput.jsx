import {
  darkGrayColor,
  errorColor,
  whiteColor,
  whiteColorTransparent,
} from '@/styles/variables.module.scss';
import { useState } from 'react';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { RiErrorWarningLine } from 'react-icons/ri';
import styles from './TextInput.module.scss';

export default function TextInput({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  // Show or hide password according to the 'show' value
  const handleShowPassword = (e, show) => {
    e.preventDefault();
    setShowPassword(show);
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <div className="textinput__wrapper">
        {props.type === 'password' && (
          <div className="password-visibility-container">
            {showPassword ? (
              <IoEyeOffSharp
                size={24}
                fill={whiteColor}
                onClick={(e) => handleShowPassword(e, false)}
              />
            ) : (
              <IoEyeSharp
                size={24}
                fill={whiteColor}
                onClick={(e) => handleShowPassword(e, true)}
              />
            )}
          </div>
        )}

        <input
          autoCapitalize="false"
          autoFocus={props.autoFocus ?? false}
          type={showPassword ? 'text' : props.type}
          className={`${styles.input} ${props.light && 'light-appereance'}`}
          name={props.name}
          placeholder={props.placeholder}
          required={props.required ?? false}
          onInput={props.handleInput}
          maxLength={props.maxLength}
          style={props.styles}
        />
        {props.errorMessage && (
          <span aria-hidden="true" role="alert" className="textinput-error-msg">
            <RiErrorWarningLine size={16} fill={errorColor} />
            {props.errorMessage}
          </span>
        )}
      </div>
      <style jsx>
        {`
        label {
          color: ${whiteColor}
          margin-bottom: 5px;
        }

        .textinput__wrapper{
          width: 100%;
        }

        input, input:active {
          width: 100%;
          font-size: 1rem;
          background: transparent;
          border: ${props.errorMessage ? `1px solid ${errorColor}` : 'none'};
          border-radius: 4px;
          padding: 14px;
          box-shadow: inset 0 0 0 1px ${darkGrayColor};
        }

        .password-visibility-container{
          position: absolute;
          top: ${props.errorMessage ? 'calc(50% - 12px)' : '50%'};
          right: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .textinput-error-msg{
          position: static;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
          gap: 5px;
          color: ${errorColor};
          margin-top: 3px;
        }

        .light-appereance{
          border: ${props.errorMessage ? '2px' : '1px'} solid ${
          props.errorMessage ? errorColor : whiteColor
        };
        }

        .light-appereance::placeholder{
          color: ${whiteColorTransparent};
        }
      `}
      </style>
    </div>
  );
}

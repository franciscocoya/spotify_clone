import {
  darkGrayColor,
  whiteColor,
  whiteColorTransparent,
} from '@styles/variables.module.scss';
import { useState } from 'react';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
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
          border: none;
          border-radius: 4px;
          padding: 14px;
          box-shadow: inset 0 0 0 1px ${darkGrayColor};
        }

        .password-visibility-container{
          position: absolute;
          top: 50%;
          right: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .light-appereance{
          border: 1px solid ${whiteColor};
        }

        .light-appereance::placeholder{
          color: ${whiteColorTransparent};
        }
      `}
      </style>
    </div>
  );
}

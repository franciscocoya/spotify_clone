import variables from '@styles/variables.module.scss';
import styles from './TextInput.module.scss';

export default function TextInput({ ...props }) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="" className={styles.label}>
        {props.label}
      </label>
      <input
        autoCapitalize="false"
        autoFocus={props.autoFocus ?? false}
        type={props.type}
        className={styles.input}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required ?? false}
      />
      <style jsx>
        {`
        label {
          color: ${variables.whiteColor}
          margin-bottom: 5px;
        }

        input {
          font-size: 1rem;
          background: transparent;
          border: none;
          border-radius: 4px;
          padding: 14px;
          box-shadow: inset 0 0 0 1px ${variables.darkGrayColor};
        }
      `}
      </style>
    </div>
  );
}

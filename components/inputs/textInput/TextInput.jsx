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
    </div>
  );
}

import styles from './TextInput.module.scss'

export default function TextInput({ ...props }) {
  return (
      <div className={styles.inputWrapper}>
        <label htmlFor="" className={styles.label}>{props.label}</label>
        <input type="text" className={styles.input} name={props.name} placeholder={props.placeholder} />
      </div>
  )
}
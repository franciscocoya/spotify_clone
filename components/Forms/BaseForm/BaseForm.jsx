import styles from './BaseForm.module.scss';

export default function BaseForm({ children, ...props }) {
  return (
    <form
      action={props.action ?? '#'}
      onSubmit={props.onSubmit}
      method={props.method ?? 'POST'}
      className={styles.form}
    >
      {children}
    </form>
  );
}

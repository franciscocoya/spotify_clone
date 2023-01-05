import styles from './BaseForm.module.scss';

export default function BaseForm({ children, ...props }) {

  return (
    <form action="#" method="POST" className={styles.form}>
      {children}
    </form>
  );
}

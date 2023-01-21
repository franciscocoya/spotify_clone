import styles from './BaseForm.module.scss';

function BaseForm({ children, ...props }) {
  return (
    <form
      onSubmit={props.onSubmit}
      method={props.method ?? 'POST'}
      className={styles.form}
      encType="multipart/form-data"
      style={props?.style}
    >
      {children}
    </form>
  );
}

export default BaseForm;

import clsx from 'clsx';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.footerContent)}>
        <h3 className={clsx(styles.title, 'text-h3')}>Made with love by wisetreee</h3>
      </div>
    </footer>
  );
};

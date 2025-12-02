import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <h3 className={styles.title}>Made with love by wisetreee</h3>
      </div>
    </footer>
  );
};

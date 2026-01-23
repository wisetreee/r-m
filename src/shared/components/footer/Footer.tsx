import styles from './Footer.module.scss';

import { clsx } from '@/shared/helpers';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footerContent)}>
        <h3 className={clsx(styles.title, 'heading-md')}>
          Made with love by wisetreee
        </h3>
      </div>
    </footer>
  );
};

import styles from './BigLogo.module.scss';

import bigLogo from '@/assets/big_logo.png';

export const BigLogo = () => {
  return (
    <div className={styles.bigLogoContainer}>
      <img
        src={bigLogo}
        alt='Logo'
      />
    </div>
  );
};

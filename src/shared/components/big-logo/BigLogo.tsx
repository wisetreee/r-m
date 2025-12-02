import bigLogo from '@/assets/big_logo.png';
import styles from './BigLogo.module.css';

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

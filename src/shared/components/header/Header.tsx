import { Button } from '../button/Button';
import styles from './Header.module.css';
import Logo from '@/assets/logo.svg?react';
import SunIcon from '@/assets/icons/sun.svg?react';
import RuIcon from '@/assets/icons/ru.svg?react';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Logo />
        <div className={styles.buttonPanel}>
          <Button
            variant='icon'
            leftIcon={<SunIcon />}
          />
          <Button
            variant='icon'
            leftIcon={<RuIcon />}
          />
        </div>
      </div>
    </header>
  );
};

import { Button } from '../button/Button';

import styles from './Header.module.css';

import { LogoIcon, SunIcon, RuIcon } from '@/assets/icons';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <LogoIcon />
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

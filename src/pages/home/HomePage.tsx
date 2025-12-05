import styles from './HomePage.module.css';

import { BigLogo, Loader } from '@/shared/components';

export const HomePage = () => {
  return (
    <section className={`container ${styles.charactersSection}`}>
      <BigLogo />
      <Loader
        size='big'
        footer='Loading characters...'
      />
    </section>
  );
};

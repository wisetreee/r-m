import { BigLogo, Loader } from '@/shared/components';
import styles from './HomePage.module.css';
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

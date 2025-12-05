import { useNavigate } from 'react-router';

import styles from './CharacterPage.module.css';

import { Button, Loader } from '@/shared/components';
import { ArrowBackIcon } from '@/assets/icons';

export const CharacterPage = () => {
  const navigate = useNavigate();
  return (
    <section className={`container ${styles.characterDetailsSection}`}>
      <Button
        onClick={() => navigate(-1)}
        className={styles.backButton}
        variant='ghost'
        leftIcon={<ArrowBackIcon />}
      >
        GO BACK
      </Button>
      <div className={styles.loaderWrapper}>
        <Loader
          size='big'
          footer='Loading character card...'
        />
      </div>
    </section>
  );
};

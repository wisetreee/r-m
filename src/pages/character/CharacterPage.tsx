import { Button, Loader } from '@/shared/components';
import styles from './CharacterPage.module.css';
import { ArrowBackIcon } from '@/assets/icons';
import { useNavigate } from 'react-router';

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

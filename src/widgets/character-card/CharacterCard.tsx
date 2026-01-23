import { useState, type FC } from 'react';
import { Link } from 'react-router';

import styles from './CharacterCard.module.scss';

import type { Character } from '@/shared/types';
import { FieldWithLabel } from '@/shared/components';
import { CHARACTER_LABELS } from '@/shared/constants';
import { clsx } from '@/shared/helpers';
import { CheckIcon, CrossIcon, EditIcon } from '@/assets/icons';

export type CharacterCardDTO = Pick<
  Character,
  'id' | 'name' | 'image' | 'status' | 'location' | 'gender' | 'species' | 'url'
>;
type CardMode = 'idle' | 'hover' | 'edit';

interface CharacterCardProps {
  character: CharacterCardDTO;
  onSave?: (updated: CharacterCardDTO) => void;
}
export const CharacterCard: FC<CharacterCardProps> = ({
  character,
  onSave
}) => {
  const [mode, setMode] = useState<CardMode>('idle');
  const [data, setData] = useState(character);

  const handleMouseEnter = () => {
    if (mode === 'idle') setMode('hover');
  };

  const handleMouseLeave = () => {
    if (mode === 'hover') setMode('idle');
  };

  const handleEditClick = () => {
    setMode('edit');
    setData(character);
  };
  const handleCancel = () => {
    setMode('idle');
  };
  const handleSave = () => {
    onSave?.(data);
    setMode('idle');
  };
  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={character.image}
        />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataColumn}>
          <Link
            to={'/characters/' + character.id}
            className={clsx(styles.characterName, 'heading-sm')}
          >
            {character.name}
          </Link>
          <FieldWithLabel label={CHARACTER_LABELS.GENDER}>
            <p className={clsx(styles.field, 'body-sm')}>{character.gender}</p>
          </FieldWithLabel>
          <FieldWithLabel label={CHARACTER_LABELS.SPECIES}>
            <p className={clsx(styles.field, 'body-sm')}>{character.species}</p>
          </FieldWithLabel>
          <FieldWithLabel label={CHARACTER_LABELS.LOCATION}>
            <p className={clsx(styles.field, 'body-sm')}>
              {character.location.name}
            </p>
          </FieldWithLabel>
          <FieldWithLabel label={CHARACTER_LABELS.STATUS}>
            <p className={clsx(styles.field, 'body-sm')}>{character.status}</p>
          </FieldWithLabel>
        </div>
        {mode === 'hover' ? (
          <EditIcon
            className={styles.editIcon}
            onClick={handleEditClick}
          />
        ) : (
          mode === 'edit' && (
            <div className={styles.editButtonsContainer}>
              <CrossIcon
                className={styles.editIcon}
                onClick={handleCancel}
              />
              <CheckIcon
                className={styles.editIcon}
                onClick={handleSave}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

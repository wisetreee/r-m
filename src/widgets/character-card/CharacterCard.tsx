import { useState, type FC } from 'react';
import { Link } from 'react-router';

import styles from './CharacterCard.module.scss';

import type { CharacterCardDTO, SelectorOption } from '@/shared/types';
import {
  FieldWithLabel,
  Input,
  Selector,
  StatusOption
} from '@/shared/components';
import { CHARACTER_LABELS } from '@/shared/constants';
import { capitalizeFirstLetter, clsx } from '@/shared/helpers';
import { CheckIcon, CrossIcon, EditIcon } from '@/assets/icons';

const statusOptions: SelectorOption[] = [
  { label: <StatusOption status='alive' />, value: 'alive' },
  { label: <StatusOption status='dead' />, value: 'dead' },
  { label: <StatusOption status='unknown' />, value: 'unknown' }
];

type CardMode = 'view' | 'edit';

interface CharacterCardProps {
  character: CharacterCardDTO;
  onSave?: (updated: CharacterCardDTO) => void;
}

export const CharacterCard: FC<CharacterCardProps> = ({
  character,
  onSave
}) => {
  const [mode, setMode] = useState<CardMode>('view');
  const [editData, setEditData] = useState(character);

  const handleEditClick = () => {
    setEditData(character);
    setMode('edit');
  };

  const handleCancel = () => {
    setMode('view');
  };

  const handleSave = () => {
    onSave?.(editData);
    setMode('view');
  };

  const handleFieldChange =
    (field: keyof CharacterCardDTO) => (value: string) => {
      setEditData((prev) => ({
        ...prev,
        [field]: value
      }));
    };

  const displayData = mode === 'view' ? character : editData;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={displayData.image}
          alt={displayData.name}
        />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataColumn}>
          {mode === 'edit' ? (
            <Input
              placeholder='Name'
              variant='underline'
              value={editData.name}
              onChange={handleFieldChange('name')}
              className={clsx(styles.characterName, 'heading-sm')}
            />
          ) : (
            <Link
              to={`/characters/${displayData.id}`}
              className={clsx(styles.characterName, 'heading-sm')}
            >
              {displayData.name}
            </Link>
          )}

          <FieldWithLabel label={CHARACTER_LABELS.GENDER}>
            <p className={clsx(styles.field, 'body-sm')}>
              {capitalizeFirstLetter(displayData.gender)}
            </p>
          </FieldWithLabel>

          <FieldWithLabel label={CHARACTER_LABELS.SPECIES}>
            <p className={clsx(styles.field, 'body-sm')}>
              {displayData.species}
            </p>
          </FieldWithLabel>

          <FieldWithLabel label={CHARACTER_LABELS.LOCATION}>
            {mode === 'edit' ? (
              <Input
                placeholder='Location'
                variant='underline'
                value={editData.location}
                onChange={handleFieldChange('location')}
                className={clsx(styles.field, 'body-sm')}
              />
            ) : (
              <p className={clsx(styles.field, 'body-sm')}>
                {displayData.location}
              </p>
            )}
          </FieldWithLabel>

          <FieldWithLabel label={CHARACTER_LABELS.STATUS}>
            {mode === 'edit' ? (
              <Selector
                placeholder='Status'
                size='small'
                value={editData.status}
                options={statusOptions}
                onChange={handleFieldChange('status')}
              />
            ) : (
              <StatusOption status={displayData.status} />
            )}
          </FieldWithLabel>
        </div>

        {mode === 'view' ? (
          <EditIcon
            className={styles.editIcon}
            onClick={handleEditClick}
          />
        ) : (
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
        )}
      </div>
    </div>
  );
};

import { useState, type FC } from 'react';
import { Link } from 'react-router';

import styles from './CharacterCard.module.scss';

import type { Character, Status } from '@/shared/types';
import {
  FieldWithLabel,
  Input,
  Selector,
  StatusOption,
  type SelectorOption
} from '@/shared/components';
import { CHARACTER_LABELS } from '@/shared/constants';
import { clsx } from '@/shared/helpers';
import { CheckIcon, CrossIcon, EditIcon } from '@/assets/icons';

const statusOptions: SelectorOption[] = [
  { label: <StatusOption status='Alive' />, value: 'Alive' },
  { label: <StatusOption status='Dead' />, value: 'Dead' },
  { label: <StatusOption status='Unknown' />, value: 'Unknown' }
];

export type CharacterCardDTO = Pick<
  Character,
  'id' | 'name' | 'image' | 'status' | 'location' | 'gender' | 'species' | 'url'
>;

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
        [field]:
          field === 'location' ? { ...prev.location, name: value } : value
      }));
    };

  const handleFieldReset = (field: keyof CharacterCardDTO) => () => {
    setEditData((prev) => ({
      ...prev,
      [field]: field === 'location' ? character.location : character[field]
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
              onReset={handleFieldReset('name')}
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
              {displayData.gender}
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
                value={editData.location.name}
                onChange={handleFieldChange('location')}
                onReset={handleFieldReset('location')}
                className={clsx(styles.field, 'body-sm')}
              />
            ) : (
              <p className={clsx(styles.field, 'body-sm')}>
                {displayData.location.name}
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
              <StatusOption status={displayData.status as Status} />
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

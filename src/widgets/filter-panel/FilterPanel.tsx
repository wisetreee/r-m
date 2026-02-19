import { type FC } from 'react';

import styles from './FilterPanel.module.scss';

import type { FilterPanelValues } from '@/shared/types';
import { Input, Selector } from '@/shared/components';
import {
  GENDER_OPTIONS,
  INITIAL_FILTER_VALUES,
  SPECIES_OPTIONS,
  STATUS_OPIONS
} from '@/shared/constants';

interface FilterPanelProps {
  initialValues?: FilterPanelValues;
  onFilterChange?: (filters: FilterPanelValues) => void;
}

export const FilterPanel: FC<FilterPanelProps> = ({
  initialValues = INITIAL_FILTER_VALUES,
  onFilterChange
}) => {
  const handleFilterChange = (
    field: keyof FilterPanelValues,
    value: string | ''
  ) => {
    const newValues = { ...initialValues, [field]: value };
    onFilterChange?.(newValues);
  };

  return (
    <div className={styles.filterPanelContainer}>
      <Input
        placeholder='Search'
        value={initialValues.searchQuery}
        onChange={(value) => handleFilterChange('searchQuery', value)}
      />
      <Selector
        placeholder='Species'
        options={SPECIES_OPTIONS}
        value={initialValues.species}
        onChange={(value) => handleFilterChange('species', value)}
      />
      <Selector
        placeholder='Gender'
        options={GENDER_OPTIONS}
        value={initialValues.gender}
        onChange={(value) => handleFilterChange('gender', value)}
      />
      <Selector
        placeholder='Status'
        options={STATUS_OPIONS}
        value={initialValues.status}
        onChange={(value) => handleFilterChange('status', value)}
      />
    </div>
  );
};

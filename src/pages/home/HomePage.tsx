import { useState } from 'react';

import styles from './HomePage.module.scss';

import { BigLogo } from '@/shared/components';
import { CharacterCard, FilterPanel } from '@/widgets';
import type { FilterPanelValues, CharacterCardDTO } from '@/shared/types';
import { INITIAL_FILTER_VALUES } from '@/shared/constants';

const character: CharacterCardDTO = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'alive',
  species: 'human',
  gender: 'male',
  location: 'Earth',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  url: 'https://rickandmortyapi.com/api/character/1'
};

export const HomePage = () => {
  const [filterPanelValues, setFilterPanelValues] = useState<FilterPanelValues>(
    INITIAL_FILTER_VALUES
  );

  const onFilterChange = (newValues: FilterPanelValues) => {
    setFilterPanelValues(newValues);
    console.log('Новые фильтры:', newValues);
  };

  return (
    <section className={`container ${styles.charactersSection}`}>
      <BigLogo />

      <FilterPanel
        initialValues={filterPanelValues}
        onFilterChange={onFilterChange}
      />
      <CharacterCard character={character} />
    </section>
  );
};

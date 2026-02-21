import type {
  FilterPanelValues,
  Gender,
  SelectorOption,
  Species,
  Status
} from '@/shared/types';

export const CHARACTER_LABELS = {
  GENDER: 'Gender',
  SPECIES: 'Species',
  LOCATION: 'Location',
  STATUS: 'Status',
  ORIGIN: 'Origin',
  TYPE: 'Type'
};

export const STATUS_OPIONS: SelectorOption<Status>[] = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
];

export const GENDER_OPTIONS: SelectorOption<Gender>[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Genderless', value: 'genderless' },
  { label: 'Unknown', value: 'unknown' }
];

export const SPECIES_OPTIONS: SelectorOption<Species>[] = [
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' },
  { label: 'Cronenberg', value: 'cronenberg' },
  { label: 'Disease', value: 'disease' },
  { label: 'Unknown', value: 'unknown' }
];

export const INITIAL_FILTER_VALUES: FilterPanelValues = {
  searchQuery: '',
  status: '',
  gender: '',
  species: ''
};

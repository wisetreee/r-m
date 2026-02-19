import type { ReactNode } from 'react';

export type Status = 'alive' | 'dead' | 'unknown';

export type Gender = 'male' | 'female' | 'genderless' | 'unknown';

export type Species =
  | 'human'
  | 'alien'
  | 'humanoid'
  | 'animal'
  | 'robot'
  | 'cronenberg'
  | 'disease'
  | 'unknown';

export interface GetCharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterRaw[];
}

export interface CharacterRaw {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  location: string;
  image: string;
  origin: string;
}

export type CharacterCardDTO = Pick<
  Character,
  'id' | 'name' | 'image' | 'status' | 'location' | 'gender' | 'species' | 'url'
>;

export interface FilterPanelValues {
  searchQuery: string;
  status: Status | '';
  gender: Gender | '';
  species: Species | '';
}

export interface SelectorOption<T = string> {
  label: ReactNode;
  value: T;
}

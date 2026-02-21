import type {
  Character,
  CharacterRaw,
  Gender,
  Species,
  Status
} from '@/shared/types';

const isStatus = (value: string): value is Status => {
  return ['Alive', 'Dead', 'unknown'].includes(value);
};

const isGender = (value: string): value is Gender => {
  return ['Female', 'Male', 'Genderless', 'unknown'].includes(value);
};

const isSpecies = (value: string): value is Species => {
  return [
    'Human',
    'Alien',
    'Humanoid',
    'Animal',
    'Robot',
    'Cronenberg',
    'Disease',
    'Unknown'
  ].includes(value);
};
export const adaptCharacter = (raw: CharacterRaw): Character => {
  return {
    id: raw.id,
    url: raw.url,
    name: raw.name,
    status: isStatus(raw.status) ? raw.status : 'unknown',
    species: isSpecies(raw.species) ? raw.species : 'unknown',
    type: raw.type,
    gender: isGender(raw.gender) ? raw.gender : 'unknown',
    location: raw.location.name,
    image: raw.image,
    origin: raw.origin.name
  };
};

export const adaptCharacters = (rawList: CharacterRaw[]): Character[] => {
  return rawList.map(adaptCharacter);
};

export type Status = 'Alive' | 'Dead' | 'Unknown';

export type Gender = 'Male' | 'Female' | 'Genderless' | 'Unknown';

export interface Character {
  id: number;
  name: string;
  gender: Gender;
  status: Status;
  species: string;
  type: string;
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

export interface Character {
  id: number;
  name: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'Unknown';
  status: 'Alive' | 'Dead' | 'Unknown';
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

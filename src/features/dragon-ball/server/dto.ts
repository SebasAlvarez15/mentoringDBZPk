export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
}
interface OriginPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: string | null;
}

interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: string | null;
}
export interface DragonBallCharacterDetail extends Character {
  originPlanet: OriginPlanet;
  transformations: Transformation[];
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string | null;
  next: string | null;
  last: string;
}

export interface ApiResponse {
  items: Character[];
  meta: Meta;
  links: Links;
}

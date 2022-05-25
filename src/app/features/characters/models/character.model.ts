import { Image } from "./image.model";
import { FullName } from "./name.model";

export interface Character {
  id: number;
  age: number;
  name: FullName;
  images: Image;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: string[];
}

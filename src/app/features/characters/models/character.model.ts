import { image } from "./image.model";
import { fullName } from "./name.model";

export interface character {
  id: number;
  age: number;
  name: fullName;
  images: image;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: string[];
}

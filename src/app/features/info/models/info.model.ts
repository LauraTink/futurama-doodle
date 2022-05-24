import { creatorsDetails } from "./creators.model";

export interface Info {
  id: number;
  synopsis: string;
  yearsAired: string;
  creators: creatorsDetails[];
}

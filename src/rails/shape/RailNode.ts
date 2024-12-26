import { RailModel } from "./rail";

export interface RailNode {
  parentId: number;

  name: string;
  id: number;
  rails: RailModel[];
}

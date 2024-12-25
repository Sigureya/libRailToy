import { RailShape } from "./railShape";

// レールの複合表現。ポイントなどを想定している
export interface RailStructure {
  segments: RailShape[]; // 「list」は具体性に欠けるので「segments」の方が適切。
}

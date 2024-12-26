import { RailSegment } from "./railSegment";

/**
 * @description レールモデル型。この型は不変である。
 */
export interface RailModel {
  /**
   * @description 画像ファイルの名前。
   */
  image: string;
  /**
   * @description レールの断片。原則的に要素は一つだが、分岐レールや複線レールは複数の断片を持つ。
   */
  segments: RailSegment[];
  id: number;
  name: string;
  /**
   * @description 裏表反転した場合の差し替え先モデル。反転不能な場合はundefined。
   */
  flipedModelId?: number;
}

import type { RailShape } from "./shape";
import { zeroVector } from "./vector4";
import type { RailTransform } from "./vector4/railTransfrom";
import { vectorFromRailShape } from "./vectorFromShape";

export const accmulateVector = (
  shapes: ReadonlyArray<Readonly<RailShape>>,
  angle = 0
) => {
  const result: RailTransform = {
    angle,
    movement: zeroVector(),
  };
  // この関数は呼び出し頻度が高く、レスポンス速度が要求される。
  // なのでforループで処理している
  for (const shape of shapes) {
    const vector = vectorFromRailShape(shape, result.angle);
    result.angle += shape.arc;
    result.movement.a += vector.a;
    result.movement.b += vector.b;
    result.movement.c += vector.c;
    result.movement.d += vector.d;
  }

  return result;
};

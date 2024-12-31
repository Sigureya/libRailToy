import type { RailShape } from "./shape";
import type { RailVector4 } from "./vector4";
import { add, zeroVector } from "./vector4";
import type {
  RailTransform,
  ReadonlyRailTransform,
} from "./vector4/railTransfrom";
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

export const nextPosition = (
  prevPosition: ReadonlyRailTransform,
  shape: RailShape
): RailTransform => {
  return {
    angle: prevPosition.angle + shape.arc,
    movement: add(
      prevPosition.movement,
      vectorFromRailShape(shape, prevPosition.angle)
    ),
  };
};

const mapVector = (shapes: ReadonlyArray<Readonly<RailShape>>, angle = 0) => {
  let pre: { readonly angle: number; movement: Readonly<RailVector4> } = {
    angle: angle,
    movement: zeroVector(),
  };
  return shapes.map<RailTransform>((shape) => {
    const vector = vectorFromRailShape(shape, pre.angle);
    pre = {
      angle: shape.arc + pre.angle,
      movement: vector,
    };
    return pre;
  });
};

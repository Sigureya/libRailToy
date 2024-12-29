import type { GGG, RailVector4, UnitRailVector4 } from "../railVector4";
import { accmulateVector, reverse, scale } from "../utils";

import { ModContainer } from "./modContainer";

// const dir4 = (angle8: ModContainer<RailVector4>): GGG => {};

const createSinCosTable: (arg: GGG) => Readonly<RailVector4>[] = ({
  back: down,
  left,
  right,
  forward: up,
}) => {
  return [
    accmulateVector([up, right]),
    accmulateVector([up, up, right, right]),
    accmulateVector([right, down]),
    accmulateVector([right, right, down, down]),
    accmulateVector([down, left]),
    accmulateVector([down, down, left, left]),
    accmulateVector([left, up]),
    accmulateVector([left, left, up, up]),
  ] as const;
};

const createXXX = (arg: GGG) =>
  ({
    STRAIGHT: arg.forward,
    CURVE: new ModContainer(createSinCosTable(arg)),
  } as const);

const hoge2 = (angle: number, table: ModContainer<RailVector4>) => {
  const r0 = [
    accmulateVector([table.at(angle + 0), table.at(angle + 2)]),
    accmulateVector([
      table.at(angle + 0),
      table.at(angle + 0),
      table.at(angle + 2),
      table.at(angle + 2),
    ]),
  ];
};

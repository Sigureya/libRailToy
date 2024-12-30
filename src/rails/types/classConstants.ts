import { createAngleTable } from "./vector4/createTable";
import { RailAngleTable } from "./vector4/types/railDirection";

export { SIMULATOR_RAIL_CONSTANTS } from "./shape";
export const ANGLE_TABLE = new RailAngleTable(createAngleTable());

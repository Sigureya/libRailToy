import { createAngleTable } from "./vector4/createTable";
import { RailAngleTable } from "./vector4/types/railDirection";

export const ANGLE_TABLE = new RailAngleTable(createAngleTable());

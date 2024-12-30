import { createAngleTable } from "./vector4/newCode/createTable";
import { RailAngleTable } from "./vector4/newCode/railDirection";

export const ANGLE_TABLE = new RailAngleTable(createAngleTable());

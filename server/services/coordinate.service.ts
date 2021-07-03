import type { CoordinateDocument } from "../models/coordinate.model";
import CoordinateModel from "../models/coordinate.model";
import { Cell, Coordinate } from "../../common/domain-types";
import maze from "../data/maze.data.json";

const createCoordinate = async (id: string): Promise<CoordinateDocument> => {
  const coordinate: Coordinate = { x: 0, y: 0 }; // TODO: this hardcodes all mazes to start at 0,0
  const dbCoordinate = new CoordinateModel({
    _id: id,
    ...coordinate
  });
  await dbCoordinate.save();
  return dbCoordinate;
};

export const fetchCoordinate = async (id: string): Promise<CoordinateDocument> => {
  const dbCoordinate = await CoordinateModel.findById(id);
  if (dbCoordinate) {
    return dbCoordinate;
  }
  return createCoordinate(id);
};

export const updateCoordinate = async (id: string, newCoordinate: Coordinate): Promise<CoordinateDocument> => {
  const currentDbCoordinate = await fetchCoordinate(id);
  currentDbCoordinate.x = newCoordinate.x;
  currentDbCoordinate.y = newCoordinate.y;
  await currentDbCoordinate.save();
  return currentDbCoordinate;
};

export const isFinish = (id: string, coordinate: Coordinate): boolean => {
  const mazeLayout: Cell[][] = maze[<number>(<unknown>id)];
  return !!mazeLayout[coordinate.y][coordinate.x].finish;
};

import type { CoordinateDocument } from "../models/coordinate.model";
import CoordinateModel from "../models/coordinate.model";
import { Coordinate } from "../../common/domain-types";

const createCoordinate = async (id: number): Promise<CoordinateDocument> => {
  const coordinate: Coordinate = { x: 0, y: 0 };
  const dbCoordinate = new CoordinateModel({
    _id: id,
    ...coordinate
  });
  await dbCoordinate.save();
  return dbCoordinate;
};

export const fetchCoordinate = async (id: number): Promise<CoordinateDocument> => {
  const dbCoordinate = await CoordinateModel.findById(id);
  if (dbCoordinate) {
    return dbCoordinate;
  }
  return createCoordinate(id);
};

export const updateCoordinate = async (id: number, newCoordinate: Coordinate): Promise<CoordinateDocument> => {
  const currentDbCoordinate = await fetchCoordinate(id);
  currentDbCoordinate.x = newCoordinate.x;
  currentDbCoordinate.y = newCoordinate.y;
  await currentDbCoordinate.save();
  return currentDbCoordinate;
};

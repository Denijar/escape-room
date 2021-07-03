import { model, Schema, Document } from "mongoose";
import type { Coordinate } from "../../common/domain-types";

export interface CoordinateDocument extends Coordinate, Document {}

const coordinateSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  { collection: "coordinates" }
);

export default model<CoordinateDocument>("Coordinate", coordinateSchema);

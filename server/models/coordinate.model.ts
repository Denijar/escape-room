import { model, Schema, Document } from "mongoose";

export interface CoordinateDocument extends Document {
  x: number;
  y: number;
}

const coordinateSchema: Schema = new Schema(
  {
    _id: { type: Number, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  { collection: "coordinates" }
);

export default model<CoordinateDocument>("Coordinate", coordinateSchema);

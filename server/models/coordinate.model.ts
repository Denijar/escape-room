import { model, Schema, Model, Document } from "mongoose";

interface ICoordinate extends Document {
  x: number;
  y: number;
}

const coordinateSchema: Schema = new Schema(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  { collection: "coordinates" }
);

const Coordinate: Model<ICoordinate> = model("Coordinate", coordinateSchema);

export default Coordinate;

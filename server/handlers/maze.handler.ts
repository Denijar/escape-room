import { Server, Socket } from "socket.io";
import type { Coordinate } from "../../common/event-data-types";
import { updateCoordinate } from "../services/coordinate.service";

export default (io: Server, socket: Socket): void => {
  const movement = async (eventData: Coordinate): Promise<void> => {
    io.emit("maze:movement", eventData);
    await updateCoordinate(1, { body: { x: eventData.x, y: eventData.y } }); // TODO: remove hard coded MazeId and fix typing
  };

  socket.on("maze:movement", movement);
};

import { Server, Socket } from "socket.io";
import type { MazeMovement } from "../../common/event-data-types";
import { updateCoordinate } from "../services/coordinate.service";

export default (io: Server, socket: Socket): void => {
  const movement = async (eventData: MazeMovement): Promise<void> => {
    io.emit("maze:movement", eventData);
    await updateCoordinate(eventData.mazeId, { x: eventData.coordinate.x, y: eventData.coordinate.y });
  };

  socket.on("maze:movement", movement);
};

import { Server, Socket } from "socket.io";
import type { MazeMovement, MazeSuccess } from "../../common/event-data-types";
import { updateCoordinate, isFinish } from "../services/coordinate.service";

export default (io: Server, socket: Socket): void => {
  const movement = async (eventData: MazeMovement): Promise<void> => {
    io.emit("maze:movement", eventData);
    await updateCoordinate(eventData.mazeId, eventData.coordinate);

    if (isFinish(eventData.mazeId, eventData.coordinate)) {
      const success: MazeSuccess = { mazeId: eventData.mazeId };
      io.emit("maze:success", success);
    }
  };

  socket.on("maze:movement", movement);
};

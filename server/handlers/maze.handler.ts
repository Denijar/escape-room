import { Server, Socket } from "socket.io";
import type { MazeStatus, MazeSuccess } from "../../common/event-data-types";
import { updateCoordinate, isFinish } from "../services/coordinate.service";

export default (io: Server, socket: Socket): void => {
  const verifySuccess = (eventData: MazeStatus) => {
    if (isFinish(eventData.mazeId, eventData.coordinate)) {
      const success: MazeSuccess = { mazeId: eventData.mazeId };
      io.emit("maze:success", success);
    }
  };

  const movement = async (eventData: MazeStatus): Promise<void> => {
    io.emit("maze:status", eventData);
    await updateCoordinate(eventData.mazeId, eventData.coordinate);
    verifySuccess(eventData);
  };

  socket.on("maze:connect", verifySuccess);
  socket.on("maze:status", movement);
};

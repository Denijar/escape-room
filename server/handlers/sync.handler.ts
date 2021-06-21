import { Server, Socket } from "socket.io";
import type { StatusEventData } from "../../common/event-data-types";

export default (io: Server, socket: Socket, syncState: StatusEventData): void => {
  const mouseDown = (): void => {
    syncState.totalMiceDown += 1;
    io.emit("status", syncState);

    if (syncState.totalMiceDown >= syncState.miceNeeded) {
      io.emit("success");
    }
  };

  const mouseUp = (): void => {
    syncState.totalMiceDown = syncState.totalMiceDown ? syncState.totalMiceDown - 1 : 0;
    io.emit("status", syncState);
  };

  const reset = (): void => {
    syncState.totalMiceDown = 0;
    io.emit("status", syncState);
  };

  socket.emit("status", syncState);

  socket.on("mouse down", mouseDown);
  socket.on("mouse up", mouseUp);
  socket.on("reset", reset);
};

import { Server, Socket } from "socket.io";
import type { Status } from "../../common/event-data-types";

export default (io: Server, socket: Socket, syncState: Status): void => {
  const mouseDown = (): void => {
    syncState.totalMiceDown += 1;
    io.emit("sync:status", syncState);

    if (syncState.totalMiceDown >= syncState.miceNeeded) {
      io.emit("sync:success");
    }
  };

  const mouseUp = (): void => {
    syncState.totalMiceDown = syncState.totalMiceDown ? syncState.totalMiceDown - 1 : 0;
    io.emit("sync:status", syncState);
  };

  const reset = (): void => {
    syncState.totalMiceDown = 0;
    io.emit("sync:status", syncState);
  };

  socket.emit("sync:status", syncState);

  socket.on("sync:mouse_down", mouseDown);
  socket.on("sync:mouse_up", mouseUp);
  socket.on("sync:reset", reset);
};

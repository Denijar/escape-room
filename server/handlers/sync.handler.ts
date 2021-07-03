import { Server, Socket } from "socket.io";
import type { SyncStatus } from "../../common/event-data-types";

export default (io: Server, socket: Socket, syncStatus: SyncStatus): void => {
  const mouseDown = (): void => {
    syncStatus.totalMiceDown += 1;
    io.emit("sync:status", syncStatus);

    if (syncStatus.totalMiceDown >= syncStatus.miceNeeded) {
      io.emit("sync:success");
    }
  };

  const mouseUp = (): void => {
    syncStatus.totalMiceDown = syncStatus.totalMiceDown ? syncStatus.totalMiceDown - 1 : 0;
    io.emit("sync:status", syncStatus);
  };

  const reset = (): void => {
    syncStatus.totalMiceDown = 0;
    io.emit("sync:status", syncStatus);
  };

  socket.emit("sync:status", syncStatus);

  socket.on("sync:mouse_down", mouseDown);
  socket.on("sync:mouse_up", mouseUp);
  socket.on("sync:reset", reset);
};

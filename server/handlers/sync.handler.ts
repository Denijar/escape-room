import { Server, Socket } from "socket.io";
import type { SyncStatus } from "../../common/event-data-types";

export default (io: Server, socket: Socket, syncStatus: SyncStatus): void => {
  const status = (): void => {
    io.emit("sync:status", syncStatus);
  };

  const mouseDown = (): void => {
    syncStatus.totalMiceDown += 1;
    status();

    if (syncStatus.totalMiceDown >= syncStatus.miceNeeded) {
      io.emit("sync:success");
      status();
    }
  };

  const mouseUp = (): void => {
    syncStatus.totalMiceDown = syncStatus.totalMiceDown ? syncStatus.totalMiceDown - 1 : 0;
    status();
  };

  const reset = (): void => {
    syncStatus.totalMiceDown = 0;
    status();
  };

  socket.on("sync:connect", status);
  socket.on("sync:mouse_down", mouseDown);
  socket.on("sync:mouse_up", mouseUp);
  socket.on("sync:reset", reset);
};

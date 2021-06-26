import { Server, Socket } from "socket.io";
import type { Coordinate } from "../../common/event-data-types";

export default (io: Server, socket: Socket): void => {
  const movement = (eventData: Coordinate): void => {
    io.emit("maze:movement", eventData);
  };

  socket.on("maze:movement", (eventData: Coordinate) => movement(eventData));
};

import { Server, Socket } from "socket.io";

export default (io: Server, socket: Socket): void => {
  const movement = (eventData: any): void => {
    io.emit("maze:movement", eventData);
  };

  socket.on("maze:movement", (eventData) => movement(eventData));
};

import { Server, Socket } from "socket.io";
import maze from "../data/maze.json";

export default (io: Server, socket: Socket): void => {
  const mazeStart = (): void => {
    io.emit("maze layout", maze);
  };

  socket.on("maze start", mazeStart);
};

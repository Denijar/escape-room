import { Socket } from "socket.io";
import { Login } from "../../common/domain-types";
import verifyCredentials from "../services/login.service";

export default (socket: Socket, logins: Map<string, string>): void => {
  const login = async (eventData: Login): Promise<void> => {
    if (!verifyCredentials(eventData.username, eventData.password)) {
      socket.emit("login:error", "Username and/or password is not correct");
      return;
    }

    let alreadyUsed = false;
    logins.forEach((username) => {
      if (eventData.username === username) {
        alreadyUsed = true;
      }
    });

    if (alreadyUsed) {
      socket.emit("login:error", "Somebody else has already logged in with this username");
      return;
    }

    logins.set(socket.id, eventData.username);
    socket.emit("login:success");
  };

  const logout = async (): Promise<void> => {
    logins.delete(socket.id);
  };

  socket.on("login:connect", login);
  socket.on("disconnect", logout);
};

import { Socket } from "socket.io";
import { Login } from "../../common/domain-types";
import verifyCredentials from "../services/login.service";

export default (socket: Socket, logins: Map<string, string>): void => {
  const login = async (eventData: Login): Promise<void> => {
    const username = eventData.username.toLowerCase();
    const password = eventData.password.toLowerCase();
    if (!verifyCredentials(username, password)) {
      socket.emit("login:error", "Username and/or password is incorrect");
      return;
    }

    let alreadyUsed = false;
    logins.forEach((existingUsername) => {
      if (username === existingUsername) {
        alreadyUsed = true;
      }
    });

    if (alreadyUsed) {
      socket.emit("login:error", "Somebody else has already logged in with this username");
      return;
    }

    logins.set(socket.id, username);
    socket.emit("login:success", username);
  };

  const logout = async (): Promise<void> => {
    logins.delete(socket.id);
  };

  socket.on("login:connect", login);
  socket.on("disconnect", logout);
};

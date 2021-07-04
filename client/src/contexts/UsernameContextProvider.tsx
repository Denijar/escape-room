import React, { useState } from "react";

type Context = {
  username: string;
  setUsername: (username: string) => void;
};

const UsernameContext = React.createContext<Context>({ username: "", setUsername: () => null });

function UsernameContextProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string>("");

  const handleSetUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  console.log(username);

  return <UsernameContext.Provider value={{ username, setUsername: handleSetUsername }}>{children}</UsernameContext.Provider>;
}

export { UsernameContext, UsernameContextProvider };

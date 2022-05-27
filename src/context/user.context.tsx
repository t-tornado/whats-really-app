import React, { createContext, useState } from "react";
import { IUser, IUserContext } from "../utils";

interface Props {
  children?: React.ReactNode;
}

export const UserContext = createContext<IUserContext>([null, () => null]);
export const UserProvider: React.FC<Props> = (props) => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

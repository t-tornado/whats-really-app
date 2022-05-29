import { useContext } from "react";
import { SocketContext } from "../context";
import { UserContext } from "../context/user.context";

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const useActiveUser = () => {
  const user = useContext(UserContext);
  return user;
};

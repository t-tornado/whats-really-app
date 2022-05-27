import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";
import { AppConfig } from "../utils";

interface Props {
  children?: React.ReactNode;
}
const { serverURL } = AppConfig;
const socket = io(serverURL);
export const SocketContext = createContext<Socket>(socket);
export const SocketProvider: React.FC<Props> = (props) => {
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

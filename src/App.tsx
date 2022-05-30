import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import "./index.css";
import { AuthPage, MessagingPage } from "./pages";
import { useActiveUser, useSocket } from "./utils";

const App: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const socket = useSocket();
  const activeUser = useActiveUser()[0];

  useEffect(() => {
    if (isAuthenticated) {
      socket.connect();
      socket.emit("createUser", user);
    }
  }, [socket, isAuthenticated, user, activeUser]);

  return (
    <div className="2xl:container w-screen mx-auto h-screen overflow-hidden">
      {isAuthenticated ? (
        <>
          <MessagingPage />
        </>
      ) : (
        <>
          <AuthPage />
        </>
      )}
      {/* <MessagingPage /> */}
    </div>
  );
};

export default App;

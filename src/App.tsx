import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import "./index.css";
import { AuthPage, MessagingPage } from "./pages";
import { useSocket } from "./utils";

const App: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const socket = useSocket();

  useEffect(() => {
    if (!isAuthenticated) socket.disconnect();
    else {
      socket.connect();
      socket.emit("createUser", user);
    }
  }, [socket, isAuthenticated]);

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

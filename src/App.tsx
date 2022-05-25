import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./index.css";
import { AuthPage, MessagingPage } from "./pages";

const App: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);

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

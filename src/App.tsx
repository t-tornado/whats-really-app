import React from "react";
import "./index.css";
import { AuthPage, MessagingPage } from "./pages";

const App: React.FC = () => {
  return (
    <div className="2xl:container w-screen mx-auto h-screen overflow-hidden">
      {/* <AuthPage /> */}
      <MessagingPage />
    </div>
  );
};

export default App;

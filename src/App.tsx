import React from "react";
import "./index.css";
import { AuthPage } from "./pages";

const App: React.FC = () => {
  return (
    <div className="container mx-auto h-screen">
      <AuthPage />
    </div>
  );
};

export default App;

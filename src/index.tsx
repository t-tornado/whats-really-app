import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppConfig } from "./utils";
import { SocketProvider } from "./context";
import { UserProvider } from "./context/user.context";

const { auth0ClientID: clientId, auth0Domain: domain } = AppConfig;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    {...{
      clientId,
      domain,
      redirectUri: window.location.origin,
      useRefreshTokens: true,
    }}
  >
    <SocketProvider>
      <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserProvider>
    </SocketProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

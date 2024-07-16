import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DevicesProvider } from "./contexts/DevicesContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DevicesProvider>
          <App />
        </DevicesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import "./index2.css";
import App from "./V2/App";
import { AuthContextProvider } from "./V2/context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

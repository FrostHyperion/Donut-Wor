import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AccountProvider } from "./context/account";
import { Amplify } from "aws-amplify";
import AwsExports from "./aws-exports";
import { DonutProvider } from "./context/donuts";

Amplify.configure(AwsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <DonutProvider>
        <Router>
          <App />
        </Router>
      </DonutProvider>
    </AccountProvider>
  </React.StrictMode>
);

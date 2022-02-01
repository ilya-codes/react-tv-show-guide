import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { ShowsContextProvider } from "./ShowsContext";
import ScrollToView from "./ScrollToView";

ReactDOM.render(
  <React.StrictMode>
    <ShowsContextProvider>
      <Router>
        <ScrollToView />
        <App />
      </Router>
    </ShowsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

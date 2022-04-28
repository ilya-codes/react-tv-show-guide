import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { ShowsContextProvider } from "./components/ShowsContext";
import ScrollToView from "./components/ScrollToView";

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

import React from "react";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { HashRouter } from "react-router-dom";

// import {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HashRouter> */}
      <App />
    {/* </HashRouter> */}
  </React.StrictMode>
);

// const container = document.getElementById('root');
// hydrateRoot(container, <App />,);

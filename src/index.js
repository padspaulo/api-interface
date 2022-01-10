import React from "react";
import ReactDOM from "react-dom";

import Providers from "./providers";
import App1 from "./App1";
import App2 from "./App2";

ReactDOM.render(
  <React.StrictMode>
    <>
      <App1 />
      <Providers />
      <App2 />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

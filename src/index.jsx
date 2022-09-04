import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import "./assets/styles/main.less";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Providers>
    <App />
  </Providers>,
);

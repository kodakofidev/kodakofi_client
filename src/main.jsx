import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import Router from "./router";
// import ReduxProvider from "./redux/ReduxProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReduxProvider> */}
      <Router />
    {/* </ReduxProvider> */}
  </StrictMode>
);

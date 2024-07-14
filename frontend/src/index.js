import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { Analytics } from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Analytics/>
      <SpeedInsights/>
      <App />
    </Provider>
  </React.StrictMode>
);

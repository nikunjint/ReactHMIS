import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./utiles/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from "./assets/loader.gif";

import "antd/dist/reset.css";
import "./style/antd.css";
import "./index.css";
import "./style/preflight.css";
import "./style/main.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <img
          src={logo}
          className="m-auto flex h-screen w-52 items-center object-contain"
          alt="Loading"
        />
      }
    >
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./scss/settings/reset.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
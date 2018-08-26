import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./reducers/store";

import App from "./containers/app";
import "./styles/index.css";

const target = document.querySelector("#root");
const api = { store };
global.app = {
  api
};

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "tachyons";
import "./css/main.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import mixesApp from "./store";

const store = createStore(
  mixesApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();

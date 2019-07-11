import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { fetchItems } from "./redux/actions/items";
import store from "./redux/store";

const newStore = store();
newStore.dispatch(fetchItems());

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);

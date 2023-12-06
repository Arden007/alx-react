import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";

// Create the Redux store containing the uiReducer state
const store = createStore(uiReducer);

// Wrap your App component with the Provider, passing the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

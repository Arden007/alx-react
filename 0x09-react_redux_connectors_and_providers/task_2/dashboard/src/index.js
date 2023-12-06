import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; // Import redux-thunk middleware
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";

// Create the Redux store with the uiReducer state and apply middleware
const store = createStore(uiReducer, applyMiddleware(thunk));

// Wrap your App component with the Provider, passing the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

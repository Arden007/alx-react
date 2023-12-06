import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";

// Add composeEnhancers to support Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with the uiReducer state and apply middleware
const store = createStore(uiReducer, composeEnhancers(applyMiddleware(thunk)));

// Wrap your App component with the Provider, passing the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

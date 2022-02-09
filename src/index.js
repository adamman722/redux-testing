import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/users";
import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

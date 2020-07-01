import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "fontsource-roboto";
import * as serviceWorker from "./serviceWorker";
import { EventsProvider } from "./components/EventContexts";
import { LoginProvider } from "./components/LoginContext";

ReactDOM.render(
  <LoginProvider>
    <EventsProvider>
      <App />
    </EventsProvider>
  </LoginProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

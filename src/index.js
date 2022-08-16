import Raect from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
//datalayer imagine like an object
//stateprovider is higher order component to inject the children
ReactDom.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);

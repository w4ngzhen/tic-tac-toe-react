import {StrictMode} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Game from "./Game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Game/>
  </StrictMode>,
  rootElement
);

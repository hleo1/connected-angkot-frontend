// import ReactDOM from "react-dom";
// import App from "./App";
// import {CssBaseline} from "@material-ui/core";
// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <CssBaseline />
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom'

import App from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));

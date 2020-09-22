import * as React from "react";
import { render } from "react-dom";

import App from "./App";

// appRoot in the DOM
const appRoot = document.getElementById("app-root") as HTMLElement;

render(<App />, appRoot);

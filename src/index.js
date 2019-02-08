import React from "react";
import ReactDOM from "react-dom";

//css files
import "./index.css";
import "./assets/primeflex.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

//components
import RouterView from "./RouterView";
import * as serviceWorker from "./serviceWorker";

// react-typist fancy blinking
import "react-typist/dist/standalone/Typist.css";

//font awesome
//import all font awesome free icon library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab);

//https://www.npmjs.com/package/@fortawesome/react-fontawesome

ReactDOM.render(<RouterView />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

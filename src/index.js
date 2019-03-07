import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/stores/index";

// css files
import "./index.css";
import "./v1/assets/primeflex.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-image-gallery/styles/css/image-gallery.css";

// components

// react-typist fancy blinking
import "react-typist/dist/standalone/Typist.css";

// font awesome
// import all font awesome free icon library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import RouterView from "./RouterView";

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab);

// https://www.npmjs.com/package/@fortawesome/react-fontawesome

ReactDOM.render(
    <Provider store={store}>
        <RouterView />
    </Provider>,
    document.getElementById("root")
);
